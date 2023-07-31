// class component
import React from "react";
class Mycomponent extends React.Component {
  state = {
    name: "Phiet",
    age: 22,
  };
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name}
        and I'm {this.state.age} years old
      </div>
    );
  }
}

export default Mycomponent;
