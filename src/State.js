import React, { useState } from "react";

const State = () => {
  let [name, setName] = useState("William");
  const changeName = () => {
    setName("John");
  };
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default State;
