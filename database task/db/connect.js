const mongoose= require('mongoose')

connectDB= url=>{
    return mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
}

module.exports=connectDB