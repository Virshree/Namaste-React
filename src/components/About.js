import React from "react";
import User from './User';
import UserClass from './UserClass';

import {Component} from "react";


class About extends Component {
constructor(props) {

  super(props);

  // console.log("Parent Constructor");


}
componentDidMount(){
  // console.log("Parent componentDidMount");
}
render(){
  // console.log("Parent Render");

  return (
    <div>
      
      <h2>This is About us page</h2>
      <User/>
      <UserClass name="First" location="Panvel" contact="virshreedesai19@gmail.com"/>
    
      </div>
  )
}


}


export default About

/**
 * 
 * Done in Render phase
 * 
 * Parent Constructor
 * Parent Render
 * 
 * First Constructor
 * First Render
 * Second Constructor
 * Second Render
 *  
 * Done in Commit phase
 * <DOM> Manipulation phase of SINGLE BATCHED DOM
 * 
 * First ComponentDidMount
 * Second ComponentDidMount
 * Parent ComponentDidMount
 *
 * 
 */