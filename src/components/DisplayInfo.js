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
          <>
            {listUser.map((user, index) => {
              return (
                <div key={user.id} className={user.age < 23 ? "red" : "green"}>
                  <div style={{ color: "black", paddingTop: "red" }}>
                    My name is {user.name}
                  </div>
                  <span> My name is {user.age}</span>

                  <button
                    onClick={() => {
                      this.props.handelDelete(user.id);
                    }}
                    style={{ marginLeft: "20px" }}
                  >
                    Delete
                  </button>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
