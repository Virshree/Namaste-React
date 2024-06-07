import React from 'react'

const FilteredCity = (props) => {
    const { resFilterCity}=props;
    // console.log(resFilterCity);

    function handleCheckLocation(){
      console.log(`Latitude,${resFilterCity.latitude}`);
      console.log(`Longitude,${resFilterCity.longitude}`);

    }
  return (
    <div className='border-b-4 border-sky-150 ' >
        
        <div className='bg-white-400 text-black m-2 p-2   ' onClick={()=>handleCheckLocation()}>
            <p className='text-gray-500 m-3 p-3 text-xl font-bold hover:text-orange-400 '>
            <br/>
            {resFilterCity?.city}</p>
            <p className='text-gray-600 p-2 m-2'>{resFilterCity?.state},India</p>

        </div>
    </div>
  )
}

export default FilteredCity