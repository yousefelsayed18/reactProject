import { useState } from 'react'
import React from 'react'
import Child from '../Child/Child'

export default function Parent() {
    const [product, setProduct] = useState(
        {id:21 ,code:'samsung s23', price:50000 }
    )
  return (
    <>
        <div className=''>Parent</div>
        <Child productDetails={product} />
    </>
  )
}
