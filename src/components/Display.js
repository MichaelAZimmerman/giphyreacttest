import React from "react";
const Display = ({ response }) => {
  return (
    <>
      <h1>{response.data.title}</h1>
      <h1>Title</h1>
      <h1>Image</h1>
    </>
  );
};
export default Display;
