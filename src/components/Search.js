import React, { useState, useEffect } from "react";
import Display from "./Display";
import useFetch from "../hooks/useFetch";

const Search = () => {
  const [newTitle, setNewTitle] = useState("");

  const [searchBtn, setSearchBtn] = useState("");
  const { data, loading, error } = useFetch(searchBtn);
  return (
    <>
      <br />
      <label htmlFor="newTitle">Search Title: </label>
      <input
        id="newTitle"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button onClick={() => setSearchBtn(newTitle)}>click</button>
      <br />
      {data &&
        data.data.map((response, idx) => (
          <Display key={idx} response={response} />
        ))}
    </>
  );
};
export default Search;
