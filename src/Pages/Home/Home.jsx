import React, { useEffect, useState } from 'react'
import Buttons from '../../Components/Buttuns/Buttuns'
import axios from 'axios'
import Section from '../../Components/Section/Section'

const Home = () => {


    const [products, setProducts] = useState([])
   

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            setProducts(res.data)
        })
    }, [])


  return (
    <div>
        {products.map(item => <Section item={item}/>)}
    </div>
  )
}

export default Home