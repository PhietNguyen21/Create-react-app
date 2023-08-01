import React from "react";

class DisplayInfo extends React.Component {
  render() {
    // Destructuring Obj/Array
    const { listUser } = this.props;
    // const [x, , z] = this.props.arrDisplay;
    // console.log(x, z);
    return (
      <div>
        {listUser.map((user, index) => {
          return (
            <div key={user.id}>
              My name is {user.name}
              <br />
              My name is {user.age}
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfo;
