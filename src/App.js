import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [dark, setDark] = React.useState(false);
  function toggleDark() {
    setDark((dark) => !dark);
  }
  return (
    <div className="container">
      <Navbar darkMode={dark} toggleDarkMode={toggleDark} />
      <Main darkMode={dark} />
    </div>
  );
}

export default App;
