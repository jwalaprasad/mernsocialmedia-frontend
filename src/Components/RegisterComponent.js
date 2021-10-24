import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './CSS/RegisterComponent.css';

function RegisterComponent(){
    var history = useHistory();
    const handlesubmit = async (event) => {
        console.log('On handle submit');
        event.preventDefault();
        const query = {};
        query.email = event.target.email.value;
        query.phone_number = event.target.phone.value;
        query.username = event.target.username.value;
        const verifyuser = await axios.post('http://localhost:5000/activity/checkuser',query);
        if(verifyuser.data.email === true){
            console.log('Email already exists');
        }
        else{
            console.log('Email is good');
        }
        if(verifyuser.data.phone_number === true){
            console.log('Phone number already exists');
        }
        else{
            console.log('Phone number is good');
        }
        if(verifyuser.data.username === true){
            console.log('Username already exists');
        }
        else{
            console.log('Username is good');
        }
        if(verifyuser.data.username === verifyuser.data.email === verifyuser.data.phonenumber === false){
            query.name = event.target.name.value;
            query.date_of_birth = event.target.dob.value;
            query.gender = event.target.gender.value;
            query.password = event.target.password.value;
            await axios.post('http://localhost:5000/auth/register',query).then((result) => {
                console.log(result.data);
            console.log('User registered successfully, please login to continue!!!');
            history.push('/');
            });
                      
            
        }
        
        

    };
    return(
        <div className="registerform">
            <form onSubmit={handlesubmit} action='/login'>
                <label>
                    Name:
                    <input type="text" name="name" id="name" />
                </label>
                <label>
                    Date of birth:
                    <input type="date" name="dob" id="dob" />
                </label>
                <label>
                    Gender:
                    <select name="gender" id="gender" >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        </select>
                </label>
                <label>
                    Phone Number:
                    <input type="text" name="phone" id="phone" />
                </label>
                <label>
                    E-Mail:
                    <input type="email" name="email" id="email" />
                </label>
                <label>
                    Username:
                    <input type="text" name="username" id="username" />
                </label>
                <label>
                    Pasword:
                    <input type="password" name="password" id="password" />
                </label>           
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RegisterComponent;