import React from 'react'

const CuisineMenu = (props) => {
    const {resCuisine}=props;
 
  return (
    <div className="ml-30 ">
     <a href={resCuisine?.link}>
        <p
          className="text-xl m-3 p-4 bg-white-400 border border-gray
         text-black  cursor-pointer 
          rounded-xl "
        >
          {resCuisine?.text}
          
        </p>
      
      </a>
    </div>
  )
}

export default CuisineMenu