import React from "react";
const Display = ({ response }) => {
  return (
    <>
      <div className="gifBox">
        <h1>Gif: {response.title}</h1>

        <h1>Gif ID: {response.id}</h1>

        <img src={response.images.original.url} />
      </div>
    </>
  );
};
export default Display;
