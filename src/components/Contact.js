import React from 'react'


const Contact = () => {
  return (
    <div>
   
      <h2 className='text-xl font-bold m-2 p-2 '>Contact us Page</h2>
        <form className=''>
          <input className='m-2 p-2 border border-black' placeholder='name'/>
          <input className='m-2 p-2 border border-black' placeholder='message'/>
          <button className='m-2 p-2 rounded-lg bg-gray-200'>Submit </button>

        </form>
      </div>
  )
}

export default Contact