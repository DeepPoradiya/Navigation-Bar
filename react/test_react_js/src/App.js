import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Allpages from "./components/Allpages";
import Page from "./components/Page"
// import Form from "./components/Form";

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Allpages />} />
        <Route exact path="/Page/:id" element={<Page  />} />
      </Routes>
    </Main>
  );
  // return <>
  //   <div >
  //     <h1 className="text-center">STUDENT INFORMATION</h1>
  //     <Form/>
  //   </div>
  // </>;
}

export default App;
