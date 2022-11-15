const express = require('express');
const app = express();
const students = require('./routes/students.route')
const connectDb = require('./db/connect');
require('dotenv').config();



const start = async () => {

	await connectDb(process.env.MONGO_URI);


	app.listen(port, () => {
		console.log(`The App is started on : ${port}`)
	})


}


const port = process.env.PORT || 3000;


// Middlewares
app.use(express.json());
app.use('/api/v1/students/', students);



app.get('/', (req, res) => {

	res.send(`<h1 style='color:red' > use /api/v1/students </h1> `)

})


start();
