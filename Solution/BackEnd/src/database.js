const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/mena-employees',{
    useUnifiedTopology:true,
    useNewUrlParser:true, 
    useFindAndModify:false
})
    .then(db=>console.log('DB is connected'))
    .catch((error) =>console.error(err))