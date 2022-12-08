import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const UpdateForm = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getOneProduct/` + id)
        .then((res)=>{
            console.log(res)
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        }).catch((err)=>{
            console.log(err)
        })
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/updateProduct/${id}`, {
            title,
            price,
            description
        })
        .then((res)=>{
            console.log(res)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
        <h1>Edit Product</h1>
        <form onSubmit={submitHandler}>
            <label>Title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <label>Price</label>
            <input type="number" value={price}onChange={(e)=>setPrice(e.target.value)} />
            <label>Description</label>
            <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
            <button>Update</button>
        </form>
    </div>
  )
}

export default UpdateForm