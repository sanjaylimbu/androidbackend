const mongoose = require ('mongoose');


//Database name -> Practice
mongoose.connect('mongodb://localhost:27017/Fourwheelmanagementsystem',{
    useNewUrlParser: true,
  //  useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})
