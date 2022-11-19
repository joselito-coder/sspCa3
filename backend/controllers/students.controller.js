const Student = require('../models/Student.model');


const getAllStudents = async(req, res) => {

    try {
        const students = await Student.find({});

        if (students.length === 0) {
            return res.status(404).json({ error: "No Students found" })
        }

        res.status(200).json({ students })

    } catch (error) {

        res.status(500).json({ error: "Some Error occurred" })
    }
    // res.json({omkar: "Get all students"})
}

const createStudent = async(req, res) => {

    try {
        const student = await Student.create(req.body);
        res.status(200).json({ success: true, student });

        // res.json({ omkar: "Create a new student" })

    } catch (error) {
        res.status(500).json({ error: "Some Error occurred" })

    }

}



module.exports = {

    getAllStudents,
    createStudent

}