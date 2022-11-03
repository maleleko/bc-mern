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
    };

    return (
        <div className='container'>
            <div className="col-sm bg-dark text-white p-2 mt-5 width-1">
                <form className="form col-3 mx-auto" onSubmit={createUser}>

                    <label className="form-label">First Name:</label>
                    <input className='form-control' type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>

                    <label className="form-label">Last Name:</label>
                    <input className='form-control' type="text" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>

                    <label className="form-label">Email:</label>
                    <input className='form-control' type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>

                    <label className="form-label">Password:</label>
                    <input className='form-control' type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>

                    <label className="form-label">Confirm Password:</label>
                    <input className='form-control' type="password" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
                    
                    <input className="btn btn-outline-success mt-3" type="submit" value='Submit' />
                </form>
            </div>

            <div className="mt-3">
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
};


export default Form;