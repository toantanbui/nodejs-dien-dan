const mongoose = require('mongoose');

//Tao ket noi
const connect = mongoose.connect('mongodb://localhost:27017/dien_dan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => {
        console.log('ket noi MongoDB xong')
    })
    .catch((e) => {
        console.log('e', e)
    })

module.exports = { connect }