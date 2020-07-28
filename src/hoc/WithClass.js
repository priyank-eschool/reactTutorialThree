import React from 'react';

// Way A  ----------------------------------

// const WithClass = props=>{
// return (<div className={props.classes}>{props.children}</div>)
// };

// export default WithClass;

// Way B  ----------------------------------
const withClass = (WrappedComponent,classes)=>{
    return (props)=>(
        <div className={classes}>
        <WrappedComponent/>
        </div>
    );
    };
    
    export default withClass;