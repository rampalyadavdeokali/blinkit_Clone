import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {Fruits} from "../Fruits/Fruits";
import {Milk} from "../DairyProducts/Milk/Milk";
import Body from '../Body/Body';
import Maincorousel from '../Maincorosaul/Maincorousel';
import Homeproduct from '../BodyCorosaul/Homeproduct';
import Downloadapp from '../DownloadApp/Downloadapp';
import Navbar from '../Navbar/Navbar';
import { CorouselData } from '../Maincorosaul/MaincorouselData';
import { Routes } from 'react-router-dom';
import {Cart} from '../CartAndPayment/Cart'

import Bankdetails from '../Bank/Bankdetails';
import Payment from "../CartAndPayment/Payment";

import Book from '../Navbar/Book';
import Tea from '../Navbar/Tea'; 

const AllRouter = () => {

 
  const [car,setCar] = useState([]);
  

  const addToCart = (item)=>{
    setCar([...car,item])
    console.log(car)
  }




    return (
    <div>
      <Routes>
      <Route path="/" element={<>
          <Header></Header>
          <Navbar></Navbar>
          <Body />
          <Bankdetails/>
          <Maincorousel slides={CorouselData} />
          <Homeproduct   />
          <Tea />
          <Book  />
          

          <Downloadapp />
          <Footer />

        </>}>

          </Route>
          
           
        <Route path='/vegetables&fruits/fruits' element={
            <>
              <Header />
              <Navbar></Navbar>
              <Fruits></Fruits>
              <Footer />
            </>
          }>
        </Route>
        <Route path='/dairy&eggs/milk' element={
          <>
          <Header></Header>
          <Navbar></Navbar>
          <Milk></Milk>
          <Footer></Footer>
          </>
        }>
        </Route>
        <Route path='/cart' element={<>
        <Cart></Cart>
        </>}></Route>
        <Route path="/payment" element={
        <>
        <Header></Header>
        <Payment></Payment>
        <Footer></Footer>
        </>
      }></Route>
      <Route path="/journal&book"  element={

      <>
      <Header/>
      <Navbar/>
        <Book  />
      </>


      }></Route>

      <Route path="/tea&coffeee" element={<><Header></Header><Navbar></Navbar><Tea></Tea></>}></Route>
      
      </Routes>
      
    </div>
  )
}

export default AllRouter;