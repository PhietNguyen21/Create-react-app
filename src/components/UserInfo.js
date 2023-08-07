import React, { useState } from "react";

// class UserInfo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       age: "",
//     };
//   }

//   handelClick(event) {
//     console.log("Click me", this.state.name);
//     // merge State=>react class
//     this.setState({
//       name: "Jonathan",
//       age: Math.floor(Math.random() * 100 + 1),
//     });
//     // console.log(event.target);
//   }
//   handelOnmouseover(e) {
//     console.log(e.pageX);
//   }

//   handelOnchangeName(e) {
//     this.setState({
//       name: e.target.value,
//     });
//   }

//   handelOnchangeAge(e) {
//     //  bad code
//     // this.state.age = e.target.value;
//     this.setState({
//       age: e.target.value,
//     });
//   }

//   handelSubmit(e) {
//     e.preventDefault();

//     this.props.handelAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1),
//       name: this.state.name,
//       age: this.state.age,
//     });
//   }
//   render() {
//     return (
//       <>
//         My name is {this.state.name}
//         and I'm {this.state.age} years old
//         <br />
//         <button
//           onClick={(e) => {
//             this.handelClick(e);
//           }}
//         >
//           Click me
//         </button>
//         <br />
//         <button onMouseOver={this.handelOnmouseover}>Hover me</button>
//         <br />
//         <form
//           onSubmit={(e) => {
//             this.handelSubmit(e);
//           }}
//         >
//           <label>Your name:</label>
//           <input
//             value={this.state.name}
//             onChange={(e) => {
//               this.handelOnchangeName(e);
//             }}
//             type="text"
//           />
//           <br />
//           <label>Age:</label>
//           <input
//             value={this.state.age}
//             onChange={(e) => {
//               this.handelOnchangeAge(e);
//             }}
//             type="text"
//           />
//           <br />
//           <button>Submit</button>
//         </form>
//       </>
//     );
//   }
// }

const UserInfo = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handelOnchangeName = (e) => {
    setName(e.target.value);
  };

  const handelOnchangeAge = (e) => {
    setAge(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    props.handelAddNewUser({
      id: Math.floor(Math.random() * 100 + 1),
      name: name,
      age: age,
    });
  };
  return (
    <>
      My name is {name}
      and I'm {age} years old
      <br />
      <form
        onSubmit={(e) => {
          handelSubmit(e);
        }}
      >
        <label>Your name:</label>
        <input
          value={name}
          onChange={(e) => {
            handelOnchangeName(e);
          }}
          type="text"
        />
        <br />
        <label>Age:</label>
        <input
          value={age}
          onChange={(e) => {
            handelOnchangeAge(e);
          }}
          type="text"
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default UserInfo;
