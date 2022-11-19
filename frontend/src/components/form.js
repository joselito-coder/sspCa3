import React, { useState } from 'react';
import './form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'reactstrap';


import { Button } from 'reactstrap';


const addStudent = async (name, age, gender, setSuccess) => {

    age = parseInt(age);

    const res = await fetch('http://localhost:3000/api/v1/students', {

        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify({ name, age, gender })
    })

    let data = await res.json();

    // console.log(data);

    if (data.success) {
        // console.log("It was a success");
        setSuccess(true);

    }


}

export default function Form() {
    let [name, setName] = useState("");
    let [age, setAge] = useState(0);
    let [gender, setGender] = useState('male');
    let [success, setSuccess] = useState(false);

    setTimeout(() => {
        setSuccess(false);
    }, 10000);

    return (
        <>
            {success && <Alert color="success">The Student was Enrolled</Alert> }
            <div className='form-body'>
                <form className='form-structure'>
                    <div>
                        <div>
                            <input className='input-fields' id="name" onInput={e => { setName(e.target.value) }} placeholder="Enter Name" type="text" />
                        </div>
                        <div>
                            <input className='input-fields' id="age" onInput={e => { setAge(e.target.value) }} placeholder="Enter age" type="text" pattern="[0-9]*" />
                        </div>
                        <div>
                            <select className='input-fields' id="gender" onChange={e => { setGender(e.target.selectedOptions[0].value) }} placeholder="Gender" >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div>
                            <Button type="reset" onClick={() => addStudent(name, age, gender, setSuccess)} style={{ color: 'white', marginBottom: '10px', backgroundColor: 'transparent', marginTop: '160px' }} outline> Submit </Button>
                        </div>
                    </div>
                </form>
            </div>



        </>
    )
}
