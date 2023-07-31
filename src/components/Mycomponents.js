// class component
import React from "react";
class Mycomponent extends React.Component {
  state = {
    name: "Phiet",
    age: 22,
  };

  handelClick(event) {
    // console.log("Click me");
    // console.log(event.target);
  }
  handelOnmouseover(e) {
    console.log(e.pageX);
  }
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name}
        and I'm {this.state.age} years old
        <br />
        <button onMouseOver={this.handelOnmouseover} onClick={this.handelClick}>
          Click me
        </button>
      </div>
    );
  }
}

export default Mycomponent;
