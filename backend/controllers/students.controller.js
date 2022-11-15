
const getAllStudents = (req, res) => {

	res.json({omkar: "Get all students"})
}

const createStudent = (req, res) => {

	res.json({omkar: "Create a new student"})

}



module.exports = {

	getAllStudents,
	createStudent

}
