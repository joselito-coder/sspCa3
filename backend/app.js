const express = require('express');
const app = express();
const students = require('./routes/students.route')
const connectDb = require('./db/connect');
require('dotenv').config();
const cors = require('cors');

app.use(cors());
app.options('*', cors());

const allowAcrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowAcrossDomain);




const start = async() => {

    await connectDb(process.env.MONGO_URI);


    app.listen(port, () => {
        console.log(`The App is started on : ${port}`)
    })


}


const port = process.env.PORT || 3000;


// Middlewares
app.use(express.json());
app.use('/api/v1/students', students);



app.get('/', (req, res) => {

    res.send(`<h1 style='color:red' > use /api/v1/students </h1> `)

})


start();