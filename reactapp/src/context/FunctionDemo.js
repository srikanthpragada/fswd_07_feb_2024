import React, { useContext } from 'react'

const MyContext = React.createContext();  // 1

export default function FunctionDemo() {
    const details = {course : 'React', trainer : 'Srikanth Pragada'}
    return (
        // 2 
        <MyContext.Provider value={details}>  
            <h1>Parent</h1>
            <Child />
        </MyContext.Provider>
    )
}

function Child() {
    const details = useContext(MyContext)   // 3
    return (
        <>
            <h2>Child </h2>
            <h3>Course Name : {details.course}</h3>
            <GrandChild />
        </>
    )
}

function GrandChild() {
    const details = useContext(MyContext) // take data from context 
    return (
        <>
            <h2>Grand Child </h2>
            <h3>Trainer : {details.trainer} </h3>
        </>
    )
}