import { useState } from "react";

import "./App.css";

function App() {
  const [isVisisble, setIsVisible] = useState(true);
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
