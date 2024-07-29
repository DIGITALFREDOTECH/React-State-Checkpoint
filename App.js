import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A simple bio",
        imgSrc: "https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg", // Replace with your image URL
        profession: "Developer",
      },
      show: false,
      mountedTime: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ mountedTime: Date.now() - this.state.mountedTime });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShow}>Show/Hide</button>
        {this.state.show && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Person" />
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Mounted for: {Math.floor(this.state.mountedTime / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;
