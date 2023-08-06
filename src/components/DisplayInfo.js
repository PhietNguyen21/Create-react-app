import React from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";
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
      <div className="disPlay-container">
        <img src={logo} alt="logo" />
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
                  <div style={{ color: "black", paddingTop: "red" }}>
                    My name is {user.name}
                  </div>
                  <div> My name is {user.age}</div>
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
