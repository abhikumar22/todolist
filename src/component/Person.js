import React from 'react';

const person=(props)=>{
    return(
        <h1>{props.name!==undefined?props.name:'Default Name'}....{props.children}</h1>
    );
}

export default person;