import { useState } from "react";
import "./App.css";
// import About from "./componets/About";
import Navbar from "./componets/Navbar";
import Textforms from "./componets/Textforms";

function App() {

  const [mode,setmode]=useState('light');

  const toggleMode=()=>{

    if(mode==='light')
    {
      setmode('dark');
    }
    else{
      setmode('light');

    }
  }

  return (
    <>
      <Navbar title="TextUtiles" abouttext="About Us" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar  /> */}
      <Textforms title="Counter" mode={mode} toggleMode={toggleMode} />
      {/* <About /> */}
    </>
  );
}

export default App;
