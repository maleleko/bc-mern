import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const List = () => {

    const [aProduct, setAProduct] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/getProducts')
        .then((res)=>{
            console.log(res.data)
            setAProduct(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

  return (
    <div>
        <h2>All Products</h2>
        {
            aProduct.map((product, index)=>(
                <div key={index}>
                    {/* <h2>{product.title}</h2> */}
                        <Link to={`/api/getOneProduct/${product._id}`}>
                            {product.title} 
                        </Link>
                </div>
            ))
        }
    </div>
  )
}

export default List;