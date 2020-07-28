import React, {Component } from 'react';

import Person from './Person/Person';

class Persons extends Component{

    constructor(props) {
        super(props);
        console.log("|Persons.js| constructor");
    }
    // static getDerivedStateFromProps(props , state){
    //     console.log("|Persons.js| getDerivedStateFromProps",props);
    //     return state;
    // }

    componentWillUnmount(){
        console.log("|Persons.js| componentWillUnmount");
    }
    
    shouldComponentUpdate(nextProps , nextState){
        console.log("|Persons.js| shouldComponentUpdate");
        return true;
    }


    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("|Persons.js| getSnapshotBeforeUpdate");
        return null;
    }


    componentDidUpdate(){
        console.log("|Persons.js| componentDidUpdate");
    }

    render(){
        console.log("|Persons.js| render");
        return this.props.persons.map((person,index)=>{
            return <Person 
                    name={person.name}
                    age={person.age}
                    changeName={(event)=>this.props.change(event,person.id)}
                    click={()=>this.props.delete(index)}
                    key={person.id}
                />
          })
        };
    }
 
export default Persons;