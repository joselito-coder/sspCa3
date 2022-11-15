const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({

	name: {
		type: String,
	},

	age: {
		type: Number,
	},

	rollNo: {
		type: Number,
		unique: true
	}



})
