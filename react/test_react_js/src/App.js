import './App.css';
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import NavBar from './components/Navabar';
import Post from './components/Post';



function App() {
  return (
   <>
      <Main>
      <NavBar
                  />
        <Routes>
        <Route
                exact
                path="1"
                element={
                 <Post/>
                }
              ></Route>
               <Route
                exact
                path="2"
                element={
                 <Post/>
                }
              ></Route>
               <Route
                exact
                path="3"
                element={
                 <Post/>
                }
              ></Route>
        </Routes>

      </Main>
   </>
  );
}

export default App;
