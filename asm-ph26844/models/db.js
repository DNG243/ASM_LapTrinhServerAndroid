const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/asm_ph26844')
.catch((err)=>{
    console.log("loi ket noi csdl");
    console.log(err);
})

module.exports = {mongoose}