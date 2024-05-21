import {Component} from "react";


class UserClass extends Component {
    constructor(props){
        super(props);
        // console.log(props);

        this.state = {

            count:0,
            count2:1
        }

        console.log("Chld Constructor");
    }
componentDidMount(){
    console.log("Child Component didMount");

}
    render() {

        console.log("Child Rendering");
    
        const {name,location,contact}=this.props
        return(
            <div className="user-info">
                <h1>Count:{this.state.count}</h1>
                <h1>Count2:{this.state.count2}</h1>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1});
                }}>Count </button>
                <h1>{name}</h1>
                <h3>Location:{location}</h3>
                <h4>Contact:{contact}</h4>
            </div>
        )
            }
}
export default UserClass;