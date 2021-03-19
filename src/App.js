import React from "react";
import "./styles/style.css";
import Friend from "./Friend";

const App = () => {
  let friends = [
    { name: "John", age: 22, desc: "John is handsome." },
    { name: "Max", age: 23, desc: "Max is nice." },
    { name: "Bob", age: 20, desc: "Bob is smart." },
  ];

  // const buttonHandler = (e) => {
  //   e.preventDefault();
  //   let date = new Date().toLocaleDateString();
  //   alert(date);
  // };

  const buttonHandler = (msg) => {
    alert(msg);
  };

  return (
    <div>
      {friends.map((friend) => {
        return <Friend name={friend.name} age={friend.age} />;
      })}

      <form action="">
        {/* <input type="text" /> */}
        {/* <button onClick={buttonHandler}>Submit</button> */}
        <button
          onClick={() => {
            buttonHandler("Hi, how are you?");
          }}
        >
          Hello
        </button>
      </form>
    </div>
  );
};

export default App;
