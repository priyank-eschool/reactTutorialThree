import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/cockpit';
import withClass from '../hoc/WithClass';
import AuxHoc from '../hoc/AuxHoc';


class App extends Component {

  constructor(props) {
    super(props);
    console.log("|App.js| constructor");
    this.state = {
      persons: [
        { id: 1, name: "Priyank", age: 30 },
        { id: 2, name: "Rajeev", age: 29 },
        { id: 3, name: "Manish", age: 31 }
      ],
      other: "other",
      showPerson: false,
      showCockpit:true
    }
  }


  shouldComponentUpdate(nextProps , nextState){
    console.log("|App.js| shouldComponentUpdate");
    return true;
}


getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("|App.js| getSnapshotBeforeUpdate");
    return {name:"Snapshot App"};
}


componentDidUpdate(prevProps,prevState,snapshot){
    console.log("|App.js| componentDidUpdate",snapshot);
}


  static getDerivedStateFromProps(props , state){
      console.log("|App.js| getDerivedStateFromProps",props);
      return state;
  }

  // componentWillMount(){
  //   console.log("|App.js| componentWillMount");
  // }
  componentDidMount(){
    console.log("|App.js| componentDidMount");
  }

  switchNameHandler = () => {
    console.log("-----------aa--------------");
    console.log(this);
    this.setState(
      {
        persons: [
          { id: 1, name: "Priyank Sinha", age: 30 },
          { id: 2, name: "Rajeev", age: 29 },
          { id: 3, name: "Manish", age: 31 }
        ]
      }

    );
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {

    const person =[... this.state.persons];
    person.splice(personIndex, 1);
    this.setState({ persons: person });
  }

  togglePersonHandler = () => {
    this.setState({ showPerson: !this.state.showPerson })
  }
  render() {
    console.log("|App.js| render");
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            change={this.changeNameHandler}
            delete={this.deletePersonHandler}
          />
        </div>
      );
    }
    return (
      <AuxHoc>
        <button onClick={()=>{
          this.setState({showCockpit:!this.state.showCockpit});
        }}>Toggle Cockpit</button>
        {this.state.showCockpit ? (<Cockpit
          title={this.props.appTitle}
          showPerson={this.state.showPerson}
          switchNameHandler={this.switchNameHandler}
          togglePersonHandler={this.togglePersonHandler}
          personLength={this.state.persons.length}
        />):null}
        {persons}
      </AuxHoc>
    );
  }
}
export default withClass(App,'App');