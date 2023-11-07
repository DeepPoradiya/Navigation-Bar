import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Alldata from "./components/Alldata";
import './App.css';
import Profile from "./components/Profile";

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Alldata />} />
        <Route exact path="/Profile/:id" element={<Profile/>} />
      </Routes>
    </Main>
  );
}

export default App;
