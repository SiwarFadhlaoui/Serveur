
 const express = require("express")
 require("./configuration/database").connect()
 const productrouter = require("./routers/productrouter")
 

 const App = express()
App.use(express.json())
App.use("/product", productrouter)

App.listen(8080)