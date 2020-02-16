const mongoose = require ('mongoose');
const jwt=require('jsonwebtoken');

const userSchema= new mongoose.Schema({
    address:{
        type: String
    },
    contact:{
        type: String
    },
    service:{
        type: String
    },
    package:{
        type: String
    },
    time:{
        type: String
    },
   
    image: {
        type: String
    }
})
const Contact=mongoose.model('Contact',userSchema)
module.exports=Contact