import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios.get('http://localhost:8000/api/getOneProduct/' + id)
        .then((res)=>{
            console.log(res)
            setProduct(res.data)
        }).catch((err)=>{
            console.log(err)
        });
    }, [id]);

  return (
    <div>
                <div>
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                </div>
    </div>
  )
}

export default Product;