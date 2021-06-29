import React from "react";
const Display = ({ response }) => {
  return (
    <>
      <h1>{response.title}</h1>
      <h1>{response.id}</h1>
      <img src={response.images.original.url} />
    </>
  );
};
export default Display;
