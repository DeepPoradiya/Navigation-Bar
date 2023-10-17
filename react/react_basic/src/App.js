import { useState } from "react";
import "./App.css";
import About from "./componets/About";
import Navbar from "./componets/Navbar";
import Textforms from "./componets/Textforms";
import Alert from "./componets/Alert";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      showAlert("dark mode is enable", "success");
      document.body.style.backgroundColor = "black";
    } else {
      setmode("light");
      showAlert("light mode is enable", "success");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Main>
        <Navbar
          title="TextUtils"
          abouttext="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Textforms
                showAlert={showAlert}
                heading="Counter"
                mode={mode}
                toggleMode={toggleMode}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
