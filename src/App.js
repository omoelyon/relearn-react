import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import CountDisplay from "./containers/countDisplay";

class App extends Component {
  state = {
    person: [
      { id: "ujs23", age: 23, name: "busayo" },
      { id: "ujk76", age: 30, name: "kolapo" },
      { id: "klw87", age: 25, name: "femi" },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    // const personArray = this.state.person.slice();
    const personArray = [...this.state.person];
    personArray.splice(personIndex, 1);
    this.setState({ person: personArray });
  };

  toggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.person[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.person];

    persons[personIndex] = person;

    this.setState({ person: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };
    let buttonText = "Show Lists";
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => {
                  this.deletePersonHandler(index);
                }}
                key={person.id}
                changed={(event) => {
                  this.nameChangeHandler(event, person.id);
                }}
              />
            );
          })}
        </div>
      );

      buttonText = "Hide list";

      style.backgroundColor = "red";
    }

    const classes = [];
    if (this.state.person.length <= 2) {
      classes.push("red");
    }

    if (this.state.person.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <input
          type="date"
          className="timeValue"
          ref={(inp) => {
            this.inputElement = inp;
          }}
        />
        <CountDisplay />
        <h1>hello I am learning react</h1>
        <p className={classes.join(" ")}>this is really working</p>
        <button style={style} onClick={this.toggleNameHandler}>
          {buttonText}
        </button>
        {persons}
        <div className="container">
          <h3>React Form</h3>
        </div>
      </div>
    );
  }
}

export default App;
