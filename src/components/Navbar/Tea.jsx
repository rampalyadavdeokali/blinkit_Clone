import list from './data1';
 const Tea =() =>{

     return (
         <>
        <h1 className='text-lg ml-10'>Tea,Coffee & drink</h1>
        <div className="justify-center items-center flex flex-wrap ">
            
             
              {
               list.map((item, index) => (
                    <div   className="m-5 " key={index}>
                         <img  className ="w-[220px]" src={item.image} alt="missing" />
                         <h3>{item.title}</h3>
                         <p>{item.ingredients}</p>
                         <p>Price: {item.price}</p>
                        <button className="bg-gray-500 p-1 rounded-lg mt-3" >Add to Cart</button>
                     </div>
                 ))
              }
         </div>
        </>
     )
 }

export default Tea;


// import list from "./data1";

// const Tea = ()=>{

//    return (
//        <div style={{
//            display: "flex",
//            flexWrap: "wrap",
//            justifyContent: "space-around",
//            padding: "20px",
//            maxWidth: "800px", // adjust max width as needed,
//            margin: "auto", // center the cart horizontally
//              // adjust padding as needed
//        }}>
//            {
//                list.map(item=>{
//                    return(
//                        <div key={item.id}>
//                         <img style={{
//                            width: "200px",
//                            height: "200px",
//                            objectFit: "cover", // maintain aspect ratio when scaling up or down the image
//                            borderRadius: "5px", // rounded corners
//                            margin: "10px", // adjust margin as needed
//                         }} src={item.image} alt={item.title} />
//                            <h3>{item.title}</h3>
//                            <p>{item.ingredients}</p>
//                            <p>Price: {item.price}</p>  
//                            <button style={{
//                                backgroundColor: "#4CAF50", // button color
//                                color: "white", // button text color
//                                padding: "10px 20px", // button size
//                                borderRadius: "5px", // rounded corners
//                                border: "none", // remove default border
//                            }}>Add to Cart</button>
//                         </div>
//                    )
//                })
//            }
//        </div>
//    )

// }

// export default Tea;