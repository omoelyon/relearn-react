import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    person: [
      { age: 23, name: "busayo" },
      { age: 30, name: "kolapo" },
      { age: 25, name: "femi" },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { age: 56, name: newName },
        { age: 30, name: "kolapo" },
        { age: 25, name: "femi" },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        { age: 56, name: "nmesoma" },
        { age: 30, name: "femi" },
        { age: 25, name: event.target.value },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>hello I am learning react</h1>

        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "tayeButton")}
        >
          switch names
        </button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
        />
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
          changed={this.nameChangeHandler}
        />
        <Person
          name="Remi"
          age="30"
          click={this.switchNameHandler.bind(this, "taye")}
        >
          i love the lord
        </Person>

        <div className="container">
          <h3>React Form</h3>
        </div>
      </div>
    );
  }
}
export default App;
