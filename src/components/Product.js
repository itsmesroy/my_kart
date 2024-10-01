import React from 'react'

export default function Product(props) {
  return (
       <div className='row'>
            <div className='col-6'>
                <h2>{props.product.name}</h2>
                <img src={props.product.image} alt={props.product.name} />
                <h3>{props.product.price}</h3>
               </div>        
       </div>    
  )
}
