// import React, { Component } from "react";
// import Navbar from "./component/Navbar";
// import News from "./component/News";
// import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";

// export default class App extends Component {
//   pageSize = 8;
//   // apiKey = process.env.REACT_APP_NEWS_API;
//   // apiKey = "ddc4c947926d4458a7e111547f87ae89"
//   state = {
//     progress: 0,
//   };
//   setProgress = (progress) => {
//     this.setState({ progress: progress });
//   };
//   render() {
//     return (
//       <>
//         <>
//           <Main>
//             <Navbar />
//             <LoadingBar
//               height={2}
//               color="#f11946"
//               progress={this.state.progress}
//             />

//             <Routes>
//               <Route
//                 exact
//                 path="/"
//                 element={
//                   <News
//                     setProgress={this.setProgress}
//                     apiKey={this.apiKey}
//                     key="general"
//                     pageSize={this.pageSize}
//                     country="in"
//                     category="general"
//                   />
//                 }
//               ></Route>

//               <Route
//                 exact
//                 path="/general"
//                 element={
//                   <News
//                     setProgress={this.setProgress}
//                     apiKey={this.apiKey}
//                     key="general"
//                     pageSize={this.pageSize}
//                     country="in"
//                     category="general"
//                   />
//                 }
//               ></Route>

//               <Route
//                 exact
//                 path="/business"
//                 element={
//                   <News
//                     setProgress={this.setProgress}
//                     apiKey={this.apiKey}
//                     key="business"
//                     pageSize={this.pageSize}
//                     country="in"
//                     category="business"
//                   />
//                 }
//               ></Route>

//               <Route
//                 exact
//                 path="/entertainment"
//                 element={
//                   <News
//                     setProgress={this.setProgress}
//                     apiKey={this.apiKey}
//                     key="entertainment"
//                     pageSize={this.pageSize}
//                     country="in"
//                     category="entertainment"
//                   />
//                 }
//               ></Route>

//               <Route
//                 exact
//                 path="/health"
//                 element={
//                   <News
//                     setProgress={this.setProgress}
//                     apiKey={this.apiKey}
//                     key="health"
//                     pageSize={this.pageSize}
//                     country="in"
//                     category="health"
//                   />
//                 }
//               ></Route>
//               <Route
//                 exact
//                 path="/science"
//                 element={
//                   <News
//                     setProgress={this.setProgress}
//                     apiKey={this.apiKey}
//                     key="science"
//                     pageSize={this.pageSize}
//                     country="in"
//                     category="science"
//                   />
//                 }
//               ></Route>
//               <Route
//                 exact
//                 path="/sports"
//                 element={
//                   <News
//                     setProgress={this.setProgress}
//                     apiKey={this.apiKey}
//                     key="sports"
//                     pageSize={this.pageSize}
//                     country="in"
//                     category="sports"
//                   />
//                 }
//               ></Route>
//               <Route
//                 exact
//                 path="/technology"
//                 element={
//                   <News
//                     setProgress={this.setProgress}
//                     apiKey={this.apiKey}
//                     key="technology"
//                     pageSize={this.pageSize}
//                     country="in"
//                     category="technology"
//                   />
//                 }
//               ></Route>
//             </Routes>
//           </Main>
//         </>
//       </>
//     );
//   }
// }
import "./App.css"
import React from 'react'
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Form from "./component/Form";
import SecondPage from "./component/SecondPage";
export default function App() {
  return (
    <Main>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route exact path="/secondPage" element={<SecondPage/>} />
    </Routes>
  </Main>
  )
}
