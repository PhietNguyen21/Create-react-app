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

  handelAddNewUser = (Obj) => {
    this.setState({
      // listUser: [Obj, ...this.state.listUser],
      listUser: [...this.state.listUser, Obj],
    });
  };

  handelDelete = (id) => {
    let listUserNew = [...this.state.listUser];
    listUserNew = listUserNew.filter((item) => item.id !== id);

    this.setState({
      listUser: listUserNew,
    });
  };

  render() {
    return (
      <React.Fragment>
        <UserInfo handelAddNewUser={this.handelAddNewUser} />
        <DisplayInfo
          listUser={this.state.listUser}
          handelDelete={this.handelDelete}
        />
      </React.Fragment>
    );
  }
}

export default Mycomponent;
