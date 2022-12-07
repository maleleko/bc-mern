import React, {useState} from 'react'
import Form from '../components/Form'
import List from '../components/List'

const Main = () => {
    const [product, setProduct] = useState([])

    return (
        <div>
            <List stock={product} setStock={setProduct} />
            <Form stock={product} setStock={setProduct} />
        </div>
    )
}

export default Main;