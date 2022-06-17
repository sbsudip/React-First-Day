import React from 'react';
import { useState } from 'react';

export default function Details() {
    const [firstName, setFirstName] = useState(""),
        [lastName, setLastName] = useState(""),
        [age, setAge] = useState(1),
        [submit, setSubmit] = useState(false)
        ;
    function SubmitButton(e) {
        e.preventDefault()
        setSubmit(true);

    }
 
    return <div className='row'>
        <form>
            <div>
                <div className='form-group'>
                    <label>First Name :</label>
                    <input type="text" id="firstName" placeholder='First Name Please' value={firstName !== "" ? firstName : ""} onChange={(e) => setFirstName(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Last Name :</label>
                    <input type="text" id="lastName" placeholder='Last Name Please' value={lastName !== "" ? lastName : ""} onChange={(e) => setLastName(e.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label >Your Age :</label>
                    <input type="number" id="age" min="1" placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)}></input>
                </div>
                <div className='form-group center'>
                    <button className='btn btn-success m-3' onClick={(e) => SubmitButton(e)}>Submit</button>
                </div>
            </div>
        </form>
        {submit === true &&
            <div className='Righthand'>
                <div className='confirm'>
                    <h3>Detail About You</h3>
                    Nice to meet you,{firstName} {lastName}, You are {age} years old..
                </div>
            </div>}
    </div>
}
