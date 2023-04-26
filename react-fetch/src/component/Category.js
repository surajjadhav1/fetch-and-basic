import React, { useEffect, useState } from 'react'

export default function Category() {

  const [cat, setcat] = useState([])

  useEffect(()=>{

   
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(valueFromAPI=>{
      // console.log('API DATA CALLED');
      console.log(valueFromAPI);
      setcat(valueFromAPI)
    })
  } , []);



  return (
    <div className='row'>
          {
              cat.map( (obj)=>
                <>
                <div className='col-xl-3'>
                <img src={obj.image}  className='img-fluid'/>
                <b>{obj.title}</b>
                <p>{obj.price}</p>
                </div>
                </>
              ) 
          }
    </div>
  )
}
