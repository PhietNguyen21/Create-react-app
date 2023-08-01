// class component
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class Mycomponent extends React.Component {
  // JSX
  state = {
    listUser: [
      { id: 1, name: "Phiet", age: "22", address: "Nha Be" },
      { id: 2, name: "Phat", age: "25", address: "Quan 7" },
      { id: 3, name: "Minh", age: "23", address: "Quan 1" },
    ],
  };
  render() {
    return (
      <div>
        <UserInfo />
        <DisplayInfo listUser={this.state.listUser} />
      </div>
    );
  }
}

export default Mycomponent;
