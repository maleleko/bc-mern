import React, {useState} from 'react';

const Form = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = {firstName, lastName, email, password};
        console.log(newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");

        if(firstName && lastName && email && password && confirmPassword);
    };

    return (
        <div className='container'>
            <div className="col-sm bg-dark text-white p-2 mt-5 width-1">
                <form className="form col-3 mx-auto" onSubmit={createUser}>

                    <label className="form-label">First Name:</label>
                    <input className='form-control' type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                    {
                        firstName && firstName.length < 2 ? <p className="text-danger">First Name must be at least 2 characters!</p> : null
                    }

                    <label className="form-label">Last Name:</label>
                    <input className='form-control' type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
                    {
                        lastName && lastName.length < 2 ? <p className="text-danger">Last Name must be at least 2 characters!</p> : null
                    }

                    <label className="form-label">Email:</label>
                    {
                        email && email.length < 5 ? <p className="text-danger">Email must be at least 5 characters!</p> : null
                    }
                    <input className='form-control' type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>

                    <label className="form-label">Password:</label>
                    <input className='form-control' type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    {
                        password && password.length < 8 ? <p className="text-danger">Password must be at least 8 characters!</p> : null
                    }

                    <label className="form-label">Confirm Password:</label>
                    <input className='form-control' type="password" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
                    {
                        confirmPassword !== password ? <p className="text-danger">Passwords must match!</p> : null
                    }
                    
                    <input className="btn btn-outline-success mt-3" type="submit" value='Submit' />
                </form>
            </div>
        </div>
    );
};


export default Form;