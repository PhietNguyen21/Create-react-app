import React, { useState } from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";
// class DisplayInfo extends React.Component {
//   constructor(props) {
//     console.log(">>>Call me constructor");
//     super(props);
//     this.state = {
//       HidenUser: false,
//     };
//   }

//   HandelHideList(e) {
//     this.setState({
//       HidenUser: !this.state.HidenUser,
//     });
//   }
//   componentDidMount() {
//     console.log(">>>Call me component Did Mount");
//     setTimeout(() => {
//       document.title = "Phiet Nguyen";
//     }, 3000);
//   }

//   componentDidUpdate(prevProps, prevState, shot) {
//     console.log(">>>Call me component Did Update");
//     console.log(">>>Props hien tai", this.props);
//     console.log(">>>Props qua khu", prevProps);

//     if (this.props.listUser !== prevProps.listUser) {
//       if (this.props.listUser.length === 5) {
//         alert("you already have 5 users");
//       }
//     }
//   }
//   render() {
//     console.log(">>>Call me render");
//     // Destructuring Obj/Array
//     const { listUser } = this.props;
//     // const [x, , z] = this.props.arrDisplay;
//     // console.log(x, z);
//     return (
//       <div className="disPlay-container">
//         <img src={logo} alt="logo" />
//         <div>
//           <span
//             onClick={(e) => {
//               this.HandelHideList(e);
//             }}
//           >
//             {this.state.HidenUser ? " Hide List User" : "Open List User"}
//           </span>
//         </div>
//         {this.state.HidenUser && (
//           <>
//             {listUser.map((user, index) => {
//               return (
//                 <div key={user.id} className={user.age < 23 ? "red" : "green"}>
//                   <div style={{ color: "black", paddingTop: "red" }}>
//                     My name is {user.name}
//                   </div>
//                   <span> My name is {user.age}</span>

//                   <button
//                     onClick={() => {
//                       this.props.handelDelete(user.id);
//                     }}
//                     style={{ marginLeft: "20px" }}
//                   >
//                     Delete
//                   </button>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfo = (props) => {
  let { listUser } = props;
  let [HiddenUser, setHiddenUser] = useState(true);

  const handelHiddenUser = () => {
    setHiddenUser(!HiddenUser);
  };
  return (
    <div className="disPlay-container">
      <div>
        <p
          onClick={() => {
            handelHiddenUser();
          }}
        >
          {HiddenUser ? "Hidden List User" : "Show list User"}
        </p>
      </div>

      {HiddenUser && (
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
                    props.handelDelete(user.id);
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
};
export default DisplayInfo;
