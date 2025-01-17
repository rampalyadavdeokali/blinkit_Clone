import React, { useState} from 'react' 
import './Homeproduct.css'
import Homeitem from './Homeitem'
import { FruitsVeggieData , ChemistData, Snacks} from './Homeproductdata'








const Homeproduct = () => {


         



    const [fruit, setFruit] = useState(FruitsVeggieData)
    const [chemist, setChemist] = useState(ChemistData)
    const [snacks, setSnacks] = useState(Snacks)
  return (
      <>
           
         
          <section className='main-product-section'>
              <h5 className='text-lg'>Fruits & vegetables</h5>
              <p>eat fresh, stay healthy</p>
              <div className="product-items">
                  {
                      fruit.map((curItem) => {
                          return <Homeitem key={curItem.id} {...curItem} />
                      
                    })

                  }
               </div>
              
          </section>
          <section className='main-product-section'>
              <h5 className='text-lg'>Chemist store</h5>
              <p>get pain relievers, dettol and more</p>
              <div className="product-items">
                  {
                      chemist.map((curItem) => {
                          return <Homeitem key={curItem.id} {...curItem}  />
                      
                    })

                  }
               </div>
              
          </section>
          <section className='main-product-section'>
              <h5 className='text-lg'>Biscuits, snacks & chocolates</h5>
              <p>namkeen, biscuits, chips and more</p>
              <div className="product-items">
                  {
                      snacks.map((curItem) => {
                          return <Homeitem key={curItem.id} {...curItem}/>
                      
                    })

                  }
               </div>
              
          </section>
      </>
  )
}

export default Homeproduct