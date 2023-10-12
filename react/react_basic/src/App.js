import { useState } from "react";
import "./App.css";
// import About from "./componets/About";
import Navbar from "./componets/Navbar";
import Textforms from "./componets/Textforms";
import Alert from "./componets/Alert";


function App() {

  const [alert,setAlert]=useState(null);


  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(() => {
      setAlert( null)
    }, 1500);
  }

  const [mode,setmode]=useState('light');

  const toggleMode=()=>{

    if(mode==='light')
    {
      setmode('dark');
      showalert('dark mode is enable','success')
      document.body.style.backgroundColor='black';
    }
    else{
      setmode('light');
      showalert('light mode is enable','success')
      document.body.style.backgroundColor='white';


    }
  }

  return (
    <>
      <Navbar title="TextUtiles" abouttext="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      {/* <Navbar  /> */}
      <Textforms showalert={showalert} title="Counter" mode={mode} toggleMode={toggleMode} />
      {/* <About /> */}
    </>
  );
}

export default App;
