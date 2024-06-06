import React from 'react'

const ExploreMenu = (props) => {
    const {resExplore}=props;

  return (
    <div className='ml-30'>
         <a href={resExplore?.link}>
        <p
          className="text-xl  p-4 bg-white-400 border border-gray
         text-black  cursor-pointer 
          rounded-xl "
        >
          {resExplore?.text}
          
        </p>
      
      </a>
   
    </div>
  )
}

export default ExploreMenu