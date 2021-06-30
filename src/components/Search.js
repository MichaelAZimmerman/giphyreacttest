import React, { useState, useEffect } from "react";
import Display from "./Display";
import useFetch from "../hooks/useFetch";

const Search = () => {
  const [newTitle, setNewTitle] = useState("");
  const { data, loading, error } = useFetch(newTitle);
  return (
    <>
      <br />
      <label htmlFor="newTitle">Search Title: </label>
      <input
        id="newTitle"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={useFetch}>click</button>
      <br />
      {data &&
        data.data.map((response, idx) => (
          <Display key={idx} response={response} />
        ))}
    </>
  );
};
export default Search;
