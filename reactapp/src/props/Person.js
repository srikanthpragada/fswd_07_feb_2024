import React from 'react'
import PropTypes from 'prop-types';

export default function Person(props) {
    // default age is 20 if not given 
    let age = props.age 
    if (!props.age)
         age = 20
        
    return (

        <>
            <h1>Name : {props.name}</h1>
            <h1>Age : {age}</h1>
        </>
    )
}


Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};