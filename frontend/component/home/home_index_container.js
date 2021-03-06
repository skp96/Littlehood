import {connect} from 'react-redux'
import {logout, login} from '../../actions/session_actions'
import { fetchPortfolio, fetchPortfolioStockPricesAndNews, fetchPortfolioStockChartData } from '../../actions/portfolio_actions'
import { fetchTransactions} from '../../actions/transaction_action'
import {fetchWatchlist} from '../../actions/watchlist_actions'

import HomeIndex from './home_index';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        portfolio: state.entities.portfolios,
        transactions: state.entities.transactions,
        watchlist: state.entities.watchlists,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        login: (user) => dispatch(login(user)),
        fetchPortfolio: (portfolioId) => dispatch(fetchPortfolio(portfolioId)),
        fetchPortfolioStockPricesAndNews: (symbols) => dispatch(fetchPortfolioStockPricesAndNews(symbols)),
        fetchPortfolioStockChartData: (symbols, range) => dispatch(fetchPortfolioStockChartData(symbols, range)),
        fetchTransactions: (portfolioId) => dispatch(fetchTransactions(portfolioId)),
        fetchWatchlist: (userId) => dispatch(fetchWatchlist(userId))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex)