import React from 'react';
import './form.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Input } from 'reactstrap';

export default function Form() {
  return (
    <div className='form-body'>
        <form className='form-structure'>
            <div>
                <div>
                    <input className='input-fields'  placeholder="Enter Name" type="text" />
                </div>
                <div>
                    <input className='input-fields'  placeholder="Enter age" type="text" pattern="[0-9]*" />
                </div>
                <div>
                    <input className='input-fields'  placeholder="Gender" type="text" />
                </div>
                <div>
                    <Button style={{color: 'white', marginBottom: '10px', backgroundColor: 'transparent', marginTop: '160px'} }  outline> Submit </Button>
                </div>
            </div>
        </form>
    </div>
  )
}
