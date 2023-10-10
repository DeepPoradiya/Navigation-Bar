import "./App.css";
import About from "./componets/About";
import Navbar from "./componets/Navbar";
// import Textforms from "./componets/Textforms";

function App() {
  return (
    <>
      {/* <Navbar title="TextUtiles" abouttext="About Us" /> */}
      <Navbar />
      {/* <Textforms title="Counter" /> */}
      <About />
    </>
  );
}

export default App;
