import React from 'react'
 import { CDN_URL } from '../utils/constants';
function MenuName(props) {

    const {resMenuList}=props;
    // console.log(resMenuList?.action?.text);

  return (
    <div className='p-2 '>
      
     
        <img src={CDN_URL + resMenuList?.imageId} alt="logo"  width="220px "className="
        cursor-pointer"/>

        
        </div>
  )
}

export default MenuName