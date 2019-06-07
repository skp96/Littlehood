# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


stocks = Stock.create([{symbol: "AAPL", name: "Apple"}, {symbol: "FB", name: "Facebook"}, {symbol: "TSLA", name: "Tesla"}])

demoUser = User.create(fname: "Robin", lname: "Hood", email:"robinhood@robinhood.com", username: "robinhood", password: "littlehood" )