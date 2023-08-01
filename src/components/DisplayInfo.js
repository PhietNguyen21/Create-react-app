import React from "react";

class DisplayInfo extends React.Component {
  render() {
    // Destructuring Obj/Array
    const { name, age } = this.props;
    // const [x, , z] = this.props.arrDisplay;
    // console.log(x, z);
    return (
      <div>
        My name is {name} I'm {age} years old
      </div>
    );
  }
}

export default DisplayInfo;
