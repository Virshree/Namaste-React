import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "uk",
      },
    };
    // console.log("Constructor ")
  }

  async componentDidMount() {
    // this.timer=setInterval(() => {
    //     console.log("Namaste react ")
    // },1000)

    const data = await fetch("https://api.github.com/users/Virshree");
    const json = await data.json();
    // console.log(json);
    this.setState({ userInfo: json });
    //    console.log("Component Did Mount");
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
  }
  componentWillUnmount() {
    // clearInterval(this.timer)
    // console.log("Component Will Unmount");
  }

  render() {
    // console.log("Render");

    const { login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-info">
        <img src={avatar_url} alt="logo" />
        <h1>{login}</h1>
      </div>
    );
  }
}
export default UserClass;
