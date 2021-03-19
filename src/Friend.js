import React from "react";
const Friend = (prop) => {
  console.log(prop);
  return (
    <div>
      <h1>{prop.name}</h1>
      <h2>{prop.age}</h2>
      <p>{prop.desc}</p>
    </div>
  );
};

export default Friend;
