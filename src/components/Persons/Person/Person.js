import React,{Component} from 'react';
import styled from 'styled-components';


const StyledDiv=styled.div`
    width: 60%;
    margin: 16px;
    border: red solid 1px;
    background-color: seashell;
    padding: 16px;
    text-align: center;
    @media (min-width: 500px){
        width: 450px;
    }
`


class Person extends Component{



    constructor(props) {
        super(props);
        console.log("|Person.js| constructor");
    }
    // static getDerivedStateFromProps(props , state){
    //     console.log("|Person.js| getDerivedStateFromProps",props);
    //     return state;
    // }


    shouldComponentUpdate(nextProps , nextState){
        console.log("|Person.js| shouldComponentUpdate");
        return true;
    }

    componentWillUnmount(){
        console.log("|Person.js| componentWillUnmount");
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("|Person.js| getSnapshotBeforeUpdate");
        return {name:"Snapshot Priyank"};
    }


    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("|Person.js| componentDidUpdate",snapshot);
    }

    render(){
        console.log("|Person.js| render");
        return (

            <StyledDiv>
                <h1 onClick={this.props.click}>My Name is {this.props.name} and age is {this.props.age}.{this.props.children}</h1>
                <input type="text" onChange={this.props.changeName} value={this.props.name} />
           </StyledDiv>
        )
    }
    
   
};

export default Person;