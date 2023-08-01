// class component
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class Mycomponent extends React.Component {
  // JSX
  render() {
    const arrDisplay = ["123", "456", "789"];
    return (
      <div>
        <UserInfo />
        <DisplayInfo name="Jonathan" age={10} arrDisplay={arrDisplay} />
        <hr />
        <DisplayInfo name="Phat" age="25" />
      </div>
    );
  }
}

export default Mycomponent;
