import React, { useState } from "react";
import "./App.css";

const total = (a) => {
  let re = 0;
  for (let i = 0; i <= a; i++) {
    re += i;
  }
  return re;
};

const tax = (a) => {
  return Math.floor(a * 1.1);
};

function useCalc(
  num = 0,
  func = (a) => {
    return a;
  }
) {
  const [msg, setMsg] = useState(null);

  const setValue = (p) => {
    let res = func(p);
    setMsg(
      <p>
        ※{p}の結果は{res}です
      </p>
    );
  };

  return [msg, setValue];
}

function PlainMessage() {
  const [msg, setCalc] = useCalc();

  const onChange = (e) => {
    setCalc(e.target.value);
  };
  return (
    <>
      <h5>{msg}</h5>
      <input type="number" onChange={onChange} className="form-control" />
    </>
  );
}

function AlertMessage() {
  const [msg, setCalc] = useCalc(0, total);

  const onChange = (e) => {
    setCalc(e.target.value);
  };
  return (
    <>
      <h5>{msg}</h5>
      <input
        type="number"
        onChange={onChange}
        min="0"
        max="10000"
        className="form-control"
      />
    </>
  );
}

function App() {
  return (
    <>
      <PlainMessage />
      <AlertMessage />
    </>
  );
}

export default App;
