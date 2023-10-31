import React from "react";
// import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
// import Post from "./components/Post";
import Form from "./components/Form";

function App() {
  // return (
  //   <Main>
  //     <Routes>
  //       <Route path="/" element={<Post />} />
  //       <Route exact path="/:id" element={<Post  />} />
  //     </Routes>
  //   </Main>
  // );
  return <>
    <div >
      <h1 className="text-center">STUDENT INFORMATION</h1>
      <Form/>
    </div>
  </>;
}

export default App;
