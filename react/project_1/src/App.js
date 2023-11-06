import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Alldata from "./components/Alldata";
import './App.css';

function App() {
  return (
    <Main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Alldata />} />
        {/* <Route exact path="/" element={} /> */}
      </Routes>
    </Main>
  );
}

export default App;
