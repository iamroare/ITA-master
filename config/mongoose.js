// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost/ITA");

// const db = mongoose.connection;

// db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

// db.once('open',function(){
//     console.log('Connected to Database :: MongoDB');
// });

// module.exports = db;

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

let urlPassword= `2CJ14ucf7xKwQE6h`
let urlmain= `mongodb+srv://iamroarbeast:${urlPassword}@cluster0.acsdufa.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(`${urlmain}`,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));