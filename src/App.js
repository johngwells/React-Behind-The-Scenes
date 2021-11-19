import React, { useState, useCallback } from "react";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  console.log("App is running");
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <button onClick={allowToggleHandler}>Allow Toggling</button>
      <button onClick={toggleParagraph}>Show Paragraph</button>
    </div>
  );
}

export default App;
