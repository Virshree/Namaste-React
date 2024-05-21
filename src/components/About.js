import React from "react";
import User from './User';
import UserClass from './UserClass';

import {Component} from "react";


class About extends Component {
constructor(props) {

  super(props);

  console.log("Parent Constructor");


}
componentDidMount(){
  console.log("Parent componentDidMount");
}
render(){
  console.log("Parent Render");

  return (
    <div>
      
      <h2>This is About us page</h2>
      <User/>
      <UserClass name="Virshree (class)" location="Panvel (class)" contact="virshreedesai19@gmail.com"/>
      </div>
  )
}


}


export default About