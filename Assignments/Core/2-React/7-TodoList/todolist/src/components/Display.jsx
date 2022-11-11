import React from 'react'

const Display = ({list, setList}) => {

    const strikeThrough = (item) => {
        item.done =! item.done;
        setList([...list]);
    }

    const deleteTask = val => {
        setList( list.filter(item => (item.description !== val )) )
    }

    return (
        <div className="cont">
        <h2 className='mt-5'>To Do</h2>
        <ul className='list-group'>
            {list.map((item) =>
            <li className="list-group-item list-group-item-dark mx-auto d-flex justify-content-center align-items-center">
                
                <input className='form-check-input' type="checkbox" onChange={e => strikeThrough(item)} />

                <span className={(item.done) ? "complete": null }>{item.description}</span>

                <button className="btn btn-outline-danger"onClick={e => deleteTask(item.description)}>Delete</button>
            </li>
            )}
        </ul>
    </div>
    )
}

export default Display