import React, { useState } from 'react'

const Homeitem = ( {img,title,weight,discountprice, actualprice} ) => {

          
 
        
  return (
        <div className='flex  flex-wrap justify-center items-center m-3 w-[180px] '>
        <div className='w-[80px] '>
                <img  className ='w-full ' src={img} akt="missing"></img>

        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
                <h4 >{title}</h4>
                <p>Weight: {weight}</p>
                <p>Price: {discountprice}</p>
                {/* <p>Actual Price: {actualprice}</p> */}
                <button className='bg-gray-600  text-white rounded-lg '>Add to Cart</button>
        </div>

        </div>
  )
 
}

export default Homeitem