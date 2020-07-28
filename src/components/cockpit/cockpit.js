import React , {useEffect} from 'react';
import styled from 'styled-components';
import './cockpit.css';
import AuxHoc from '../../hoc/AuxHoc'

// it is a css code
const StyledButton=styled.button`
      background-color: ${props=> props.alt ? 'red' : 'green'};
      border: 1px solid blue;
      padding: 8px;


      &:hover{
        background-color : ${props=> props.alt ? 'salmon' : 'lightgreen'};;
        color:black;
      }
`

const Cockpit = (props)=>{
useEffect(()=>{
  console.log("|Cockpit.js| useEffect");

  return ()=>{
  console.log("|Cockpit.js| useEffect clean up");

  }
},[]);

useEffect(()=>{
  console.log("|Cockpit.js| 2nd  useEffect");

  return ()=>{
  console.log("|Cockpit.js| 2nd useEffect clean up");

  }
});
  


useEffect(()=>{
  console.log("|Cockpit.js| props.persons  useEffect");

  return ()=>{
  console.log("|Cockpit.js| props.persons useEffect clean up");

  }
},[props.persons]);
  


const classess=[];
if(props.personLength<=2){
  classess.push('red');
}
if(props.personLength<=1){
  classess.push('bold');
}

return(
<AuxHoc>
    <h1>{props.title}</h1>
    <p className={classess.join(' ')}>Hi, I am React App</p>
    <StyledButton key="B1" alt={props.showPerson} onClick={props.switchNameHandler} >Switch Name</StyledButton>
    <StyledButton alt={props.showPerson}  key="B2" onClick={props.togglePersonHandler} >Toggle Name</StyledButton>
</AuxHoc>    
    );
};

export default React.memo(Cockpit);