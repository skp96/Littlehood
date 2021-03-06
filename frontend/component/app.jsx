import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'

import SignUpFormContainer from '../component/session_form/signup_form_container';
import LogInFormContainer from '../component/session_form/login_form_container';
import HomeIndexContainer from '../component/home/home_index_container';
import StockContainer from '../component/stocks/stock_container'
import { AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => {
    return (
        <div>
            <header>
            </header>
            <Switch>
                <Route exact path="/" component={HomeIndexContainer} />
                <AuthRoute path="/signup" component={SignUpFormContainer} />
                <AuthRoute path="/login" component={LogInFormContainer} />
                <ProtectedRoute path="/stocks/:symbol" component={StockContainer} />
            </Switch>
        </div>
    );
}

export default App;