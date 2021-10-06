import React, { useState } from "react";
import "./App.css";
function App() {
  const [count, putCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const clickFunc = () => {
    putCount(count + 1);
  };
  const changeFlag = (e) => {
    setFlag(!flag);
  };
  return (
    <div>
      <h1>{count}</h1>
      {flag ? <h1 className="ON">ON</h1> : <h1 className="OFF">OFF</h1>}
      <button onClick={clickFunc}>+</button>
      <button onClick={changeFlag}>button</button>
    </div>
  );
}

export default App;
