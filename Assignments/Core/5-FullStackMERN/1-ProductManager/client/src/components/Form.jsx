import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Form = ({product, setProduct}) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    // const [product, setProduct] = props

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/createProduct', {
            title,
            price,
            description,
        }).then((res)=>{
            console.log(res)
            setProduct([...product, res.data])
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
        <h1>Post Your Product</h1>
        <form onSubmit={submitHandler}>
            <label>Title</label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} />
            <label>Price</label>
            <input type="number" onChange={(e)=>setPrice(e.target.value)} />
            <label>Description</label>
            <input type="text" onChange={(e)=>setDescription(e.target.value)} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form