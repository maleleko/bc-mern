import React, {useState} from 'react';

const TodoForm = ({list, setList}) => {

    const [description, setDescription] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        const newDesc = {
            description
        }
        setList([...list, newDesc])
    }

    return (
        <div>
            <form className="form col-2 mx-auto"onSubmit={submitHandler}>
                <label className='form-label'>What To Do</label>
                <input type="text" className="form-control"onChange={(e)=>setDescription(e.target.value)}/>
                <button className='btn btn-outline-success mt-3'>Add</button>
            </form>
        </div>
    )
}

export default TodoForm