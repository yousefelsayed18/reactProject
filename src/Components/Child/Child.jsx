
import React from 'react'

export default function Child(props) {
    console.log(props);
    // let {id}=props.productDetails
    return (
    <>
    <h1 className='text-xl'>Name:{props.productDetails.id}</h1>
    <h1 className='text-xl'>price:{props.productDetails.code}</h1>
    <h1 className='text-xl'>id:{props.productDetails.price}</h1>
    
    </>
  )
}
