import { useState } from "react";

const User=()=>{

    const [count]=useState(0);
    const [count2]=useState(1);
   
    return(

        <div className="user-info">

            <h1>Count :{count}</h1>
            <h1>Count2 :{count2}</h1>
            <h1>Virshree(function)</h1>
            <h3>Location:Panvel</h3>
            <h4>Contact:virshreedesai19@gmail.com</h4>
        </div>
    )
}

export default User;