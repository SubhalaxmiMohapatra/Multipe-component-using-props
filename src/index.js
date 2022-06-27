import React from "react";
import ReactDOM from "react-dom";
function App() {
  return (
    <div>
      <Greeting name="Nathan" age={27} occupation="Software Developer" />
      <Person name="Jane" age={24} occupation="Frontend Developer" />
      <Employee name="subhalaxmi" age={24} occupation="React developer" />

    </div>
  );
}

function Greeting(props) {
  return (
    <p>
      Hello! I'm {props.name}, a {props.age} years old {props.occupation}.
      Pleased to meet you!
    </p>
  );
}
function Person(props) {
  return (
    <p>
      Hello! I'm {props.name}, a {props.age} years old {props.occupation}.
      Pleased to meet you!
    </p>
  );
}
function Employee(props) {
  return (
    <p>
      Hello! I'm {props.name}, a {props.age} years old {props.occupation}.
      Pleased to meet you!
    </p>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));