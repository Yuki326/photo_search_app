import React, { Component } from "react";

let data = {
  title: "React-Context",
  message: "this is sample message"
};

const SampleContext = React.createContext(data);

class App extends Component {
  render() {
    return (
      <>
        <h1>React</h1>
        <div className="container">
          <Title />
          <Message />
        </div>
      </>
    );
  }
}

class Title extends Component {
  static contextType = SampleContext;

  render() {
    return (
      <>
        <div>
          <h2>{this.context.title}</h2>
        </div>
      </>
    );
  }
}

class Message extends Component {
  static contextType = SampleContext;
  render() {
    return (
      <>
        <p>{this.context.message}</p>
      </>
    );
  }
}
export default App;
