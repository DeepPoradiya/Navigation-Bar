import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Post from "./components/Post";

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route exact path="/:id" element={<Post />} />
      </Routes>
    </Main>
  );
}

export default App;
