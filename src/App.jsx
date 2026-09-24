import { useState } from "react";

import "./App.css";

function App() {
  //State for modal toggle. If true, modal is visible, if false, modal is invisible.
  const [isVisisble, setIsVisible] = useState(true);

  //The handler function for initial state. Will be toggled with a click of a button.
  const handleVisible = function () {
    setIsVisible(!isVisisble);
  };
  return (
    <>
      <div id="center">
        <button onClick={handleVisible}>
          {isVisisble ? "close modal" : "open modal"}
        </button>
        <div
          style={{
            visibility: isVisisble ? "visible" : "hidden",
            background: "yellow",
            padding: "40px",
          }}
        >
          <div>This is an open modal</div>
        </div>
      </div>
    </>
  );
}

export default App;
