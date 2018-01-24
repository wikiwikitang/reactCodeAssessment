import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import NewApptArea from "./NewApptArea";

const App = () => {
  return (
    <div>
      <NewApptArea />
      <SearchBar />
      <SearchResult />
    </div>
  );
};

export default App;
