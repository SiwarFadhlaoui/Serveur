const mongoose = require ("mongoose")

module.exports.connect =()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/xxx"
    ,{
        useNewUrlParser: true ,
        UseUnifiedTopology: true,
    })
    .then(()=>{console.log("connected to database")})

    .catch((e)=>{
        console.log(e)
        process.exit(1)
    })
}
