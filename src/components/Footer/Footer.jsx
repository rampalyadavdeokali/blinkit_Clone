import React from 'react'
import './Footer.css'
import PaymentImage from '../HomeImages/payment-method.png'
import facebook from '../HomeImages/facebook.png'
import instagram from '../HomeImages/instagram.png'
import LinkedIn from '../HomeImages/linkedin.png'
import tweeter from '../HomeImages/twitter.png'
function Footer() {
  return (
      <>
          <hr />
          <div className="footer-container">
              
              <div className="footer-top">
                  {/* <img src={firstImage} alt="" /> */}
                    <div className="first-para">
                  <p className='footer-head-bold'>We deliver everything in 10 minutes</p>
             <p className='top-sub-para'>blinkit is India’s fastest online shopping platform. Get fresh groceries and much more delivered online instantly.</p>
              </div>
              <div className="second-para">
                  <p className="footer-head-bold">
                  Single app for all your daily needs
                  </p>
                  <p className='top-sub-para'>
                  Order thousands of products at just a tap: milk, eggs, bread, cooking oil, ghee, atta, rice, fresh fruits and vegetables, spices, fresh meat, seafood, frozen veg and non-veg food, chocolates, chips, biscuits, maggi, cold drinks, shampoos, soaps, body wash, pet food, diapers, electronics, sanitizers, masks, sanitary napkins, health products, hygiene products, organic products and gourmet products, and much more from your neighbourhood stores.
                  </p>
              </div>
              <div className="third-para">
                  <p className="footer-head-bold">Available in following cities</p>
                      <p className='top-sub-para'>
                          The delivery service is operational in Agra, Ahmedabad, Aligarh, Allahabad, Bengaluru, Bhiwadi, Bijnor, Chandigarh, Chennai, Delhi, Durgapur, Faridabad, Gauriganj, Gonda, Gurugram, Guwahati, Hisar, Hyderabad, Jaipur, Jamshedpur, Kanpur, Kolkata, Kota, Lucknow, Mathura, Meerut, Mohali, Moradabad, Mumbai, Noida, Panchkula, Panipat, Pune, Raebareli, Rohtak, Sonipat, Vadodara, Zirakpur</p>
              </div>

              </div>
              <div className="footer-four-flex-box">
                  <div className="delivery-box">
                      <div className="delivery-img">
                       <img src="https://blinkit.com/images/home/express-delivery-icon-93fce76.png" alt="" />

                      </div>
                      <div className="delivery-text">
                          <p className="footer-head-bold">10 minute grocery now
                              <span>
                                  <p className='top-sub-para'>
                                  Get your order delivered to your doorstep at the earliest from dark stores near you.
                                  </p>
                                  </span>
                          </p>
                          {/* <p className='top-sub-para'></p> */}

                      </div>
                  </div>
                  <div className="price-box">
                      <div className="price-img">
                          <img src="https://blinkit.com/images/home/footer-best-price-icon-90b5bd7.png" alt="" />
                      </div>
                      
                      <div className="price-text">
                          <p className="footer-head-bold">Best Prices & Offers
                            <span>
                              <p className='top-sub-para'>
                              Cheaper prices than your local supermarket, great cashback offers to top it off.
                              </p>
                            </span>
                          </p>
                      </div>
                  </div>
                  <div className="assortment-box">
                      <div className="assortment-img">
                          <img src="https://blinkit.com/images/home/footer-genuine-products-icon-d2756ce.png" alt="" />
                      </div>
                      <div className="assortment-text">
                          <p className="footer-head-bold">
                          Wide Assortment
                            <span>
                              <p className='top-sub-para'>
                              Choose from 5000+ products across food, personal care, household & other categories.
                              </p>
                            </span>
                          </p>
                      </div>
                  </div>
                  <div className="return-box">
                      <div className="return-img">
                          <img src="https://blinkit.com/images/home/footer-easy-returns-icon-02b777e.png" alt="" />
                      </div>
                      <div className="return-text">
                      <p className="footer-head-bold">
                      Easy Returns
                            <span>
                              <p className='top-sub-para'>
                              Not satisfied with a product? Return it at the doorstep & get a refund within hours.
                              </p>
                            </span>
                          </p>
                      </div>
                  </div>
              </div>
              <div className="footer-mid">
                  <div className="footer-mid-left">
                    
                      <div className="categories-left">
                      <div className="footer-head-bold">
                          <p>
                              Categories
                             
                          </p>
                          </div>
                          <div className="categories-text">
                              <div className="categories-text-left">
                             
                              <li>
                                 <a href="">vegetables & fruits</a>
                            
                              </li>
                              <li>
                                 <a href="">munchies</a>

                              </li>
                              <li>
                                 <a href="">breakfast & instant food</a>

                              </li>
                              <li>
                                 <a href="">cold drinks & juices</a>

                              </li>
                              <li>
                                 <a href="">atta, rice & dal</a>

                              </li>
                              <li>
                                 <a href="">sauces & spreads</a>

                              </li>
                              <li>
                                 <a href="">organic & healthy living</a>

                              </li>
                              <li>
                                 <a href="">baby care</a>

                              </li>
                              <li>
                                 <a href="">cleaning essentials</a>

                              </li>
                              <li>
                                 <a href="">personal care</a>

                              </li>
                              </div>
                              <div className="categories-text-right">
                              <ul>
                              <li>
                                  <a href="">dairy, bread & eggs</a>
                              </li>
                              <li>
                                  <a href="">bakery & biscuits</a>
                              </li>
                              <li>
                                  <a href="">tea, coffee & health drinks</a>
                              </li>
                              <li>
                                  <a href="">sweet tooth</a>
                              </li>
                              <li>
                                  <a href="">masala, oil & more</a>
                              </li>
                              <li>
                                  <a href="">chicken, meat & fish</a>
                              </li>
                              <li>
                                  <a href="">gourmet & world food</a>
                              </li>
                              <li>
                                  <a href="">pharma & wellness</a>
                              </li>
                              <li>
                                  <a href="">home & office</a>
                              </li>
                              <li>
                                  <a href="">pet care</a>
                              </li>
                          </ul>
                              </div>
                              
                          </div>
                      </div>
                      
                  </div>
                  <div className="footer-mid-right">
                      <div className="footer-company">
                      <p className="footer-head-bold">
                      Company
                      </p>
                          
                              <li>
                                  <a href="">About</a>
                              </li>
                              <li>
                                  <a href="">Careers</a>
                              </li>
                              <li>
                                  <a href="">Blog</a>
                              </li>
                              <li>
                                  <a href="">Press</a>
                              </li>
                              <li>
                                  <a href="">Lead</a>
                              </li>
                              <li>
                                  <a href="">Lead</a>
                              </li>

                          

                      </div>
                      <div className="for-cunsumers">
                      <p className="footer-head-bold">
                      For Consumers
                      </p>
                      
                              <li>
                                  <a href="">Privacy</a>
                              </li>
                              <li>
                                  <a href="">Terms</a>
                              </li>
                              <li>
                                  <a href="">FAQs</a>
                              </li>
                              <li>
                                  <a href="">Security</a>
                              </li>
                              <li>
                                  <a href="">Mobile</a>
                              </li>
                              <li>
                                  <a href="">Contact</a>
                              </li>

                         

                      </div>
                  
                  <div className="for-partners">
                  <p className="footer-head-bold">
                  For Partners
                      </p>
                  
                              <li>
                                  <a href="">Partner</a>
                              </li>
                              <li>
                                  <a href="">Express</a>
                              </li>
                              <li>
                                  <a href="">Local</a>
                              </li>
                              <li>
                                  <a href="">Spotlight</a>
                              </li>
                              <li>
                                  <a href="">Warehouse</a>
                              </li>
                              <li>
                                  <a href="">Deliver</a>
                              </li>

                          
                          </div>
                  </div>
              </div>
              <div className="footer-follow-us">
                  <div className="footer-follow-us-left">
                  <div className="follow-us-text">
                      <p className='text-lg '>Follow us</p>
                  </div>
                  <div className="facebook-icon">
                      <a href="https://www.facebook.com/blinkit.india/">
                         <img src={facebook} alt="" />
                      </a>

                  </div>
                  <div className="tweeter-icon">
                      <a href="https://twitter.com/account/access">
                          <img src={tweeter} alt="" />
                      </a>
                  </div>
                  <div className="instagram-icon">
                  <a href="https://www.instagram.com/letsblinkit/">
                          <img src={instagram} alt="" />
                      </a>

                  </div>
                  <div className="linkedin-icon">
                      <a href="https://www.linkedin.com/company/grofers/">
                          <img src={LinkedIn} alt="" />
                      </a>

                  </div>
                       
                      <div className="download-app-text-p">
                      <p className='text-lg '>Download app</p>
                      </div>
                         <div className="app-images">
                          <div className='w-[120px]'>
                              <img src="data:image/png;base64,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" alt="from store" />
                          </div>
                          <div className='w-[100px]'>
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13F2R-AN5kWuzl3Pk0x325rlynV1AEdOz1Q&s" alt="from goog;e paly" />
                          </div>
                      </div>

            </div>
                 
                 
              </div>
              <hr />
              <div className="footer-bottom">
                  <div className="brand-available">
                      <p className='footer-head-bold'>Brands available on blinkit</p>
                      <p className='p-3'>
                          <a href="">grofers Happy Day</a><a href="">grofers Happy Home</a><a href="">grofers Mother's Choice</a><a href="">g Fresh</a><a href="">O'range</a>
                          <a href="">Savemore</a><a href="">24 Mantra</a><a href="">Aashirvaad</a><a href="">Act II</a> <a href="">Amul</a><a href="">Axe</a> <a href="">Bambino</a> <a href="">Best Value</a> <a href="">Bingo</a> <a href="">Bisleri</a> <a href="">Boost</a> <a href="">Bournvita</a> <a href="">Britannia</a> <a href="">Brooke Bond</a> <a href="">Bru</a>
                          Cadbury Cheetos Cinthol Closeup Coca-Cola Colgate Dabur Danone Del Monte Dettol Dhara Dove Durex English Oven Everest Fiama Di Wills Garnier Gatorade Gillette Glucon-D Grocery Gowardhan Hajmola Haldiram's Head & Shoulders Heinz Himalaya Horlicks India Gate Kellogg's Kinley Kissan Knorr L'Oreal Lay's Lijjat Limca Lipton Maggi Madhur McCain MDH Mirinda Minute Maid Mother Dairy Mountain Dew MTR Nescafe Nestle Nivea Nutella Oral-B Oreo Palmolive Pantene Paper Boat Parachute Parle Patanjali Pears Pepsi Pepsodent Pillsbury Princeware Rajdhani Real Red Bull Safal Saffola Shakti Bhog Smith & Jones Sprite Stayfree Sundrop Sunfeast Sunsilk Taj Mahal Tang Tata sampann Tata tea Tetley Thums Up Tropicana Twinings Uncle Chipps Unibic Vaseline Veet Wagh Bakri Wai Wai Whisper Whole Farm
                      </p>
                  </div>
                  <div className="payment-partner gap-3 flex ">
                      <img  className = "w-[120px]" src={PaymentImage} alt="" />
                  </div>
              </div>
              
              <div className="justify-center items-center">
              <hr />
                  <p>
                  "Blinkit " is owned & managed by "Grofers India Private Limited” and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
                  </p>
                  <hr />
                  <p>
                  By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. <p className='justify-center items-center '>2016-2022 © Grofers India Pvt Ltd. All rights reserved.</p>
                  </p>
              </div>

          </div>
          

      </>
  )
}

export default Footer