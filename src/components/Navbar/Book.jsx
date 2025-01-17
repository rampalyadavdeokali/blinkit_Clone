import list from "./data";

const Book = ({book})=>{


     
        return (
            <div> 
            <h1 className=" ml-10 text-xl">Books& Journal </h1>
            <div className="flex flex-wrap border-1 h-50 mt-10 justify-center items-center text-center" >
            { 
                list.map((book, index) => (
                    <div   className="m-5 " key={index}>
                        <div className="flex ">
                            <img  className ="w-[220px]" src={book.img} alt="missing" />
                        </div>
                        <div className="text-white bg-gray-300 rounded-lg p-3 w-[220px]">
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <button className="bg-gray-500 p-1 rounded-lg mt-3">Add to Cart</button>
                        
                        </div>
                         
                    </div>
                ))
            }
                
            </div>
            </div>
        )
     

}

export default Book;