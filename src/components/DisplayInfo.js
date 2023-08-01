import React from "react";

class DisplayInfo extends React.Component {
  state = {
    HidenUser: false,
  };

  HandelHideList(e) {
    this.setState({
      HidenUser: !this.state.HidenUser,
    });
  }
  render() {
    // Destructuring Obj/Array
    const { listUser } = this.props;
    // const [x, , z] = this.props.arrDisplay;
    // console.log(x, z);
    return (
      <div>
        <div>
          <span
            onClick={(e) => {
              this.HandelHideList(e);
            }}
          >
            {this.state.HidenUser ? " Hide List User" : "Open List User"}
          </span>
        </div>
        {this.state.HidenUser && (
          <div>
            {listUser.map((user, index) => {
              return (
                <div key={user.id} className={user.age < 23 ? "red" : "green"}>
                  My name is {user.name}
                  <br />
                  My name is {user.age}
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
