import React, { useState, useEffect } from "react";
import Display from "./Display";
import useFetch from "../hooks/useFetch";

const Search = () => {
  const [query, setQuery] = useState("");
  const { data: product, loading, error } = useFetch(`${query}`);

  return (
    <>
      <br />
      <label htmlFor="newTitle">Search Title: </label>
      <input
        id="newTitle"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={useFetch(query)}>click</button>
      {product.map((response, idx) => (
        <Display key={idx} response={response} />
      ))}
    </>
  );
};
export default Search;
