import React, { useState } from 'react'


function AddSkill({ addSkill }) {
    function addOneSkill() {
        var skill = document.getElementById("txtSkill").value
        addSkill(skill)  // calling a function in parent component 
    }
    return (
        <>
            Skill <input type="text" id="txtSkill" />
            <p></p>
            <button onClick={addOneSkill}>Add</button>
        </>
    )
}

function ListSkills({ skills, deleteSkill }) {

    function deleteOneSkill(idx) {
        if (window.confirm("Do you want to delete?"))
            deleteSkill(idx)
    }

    return (
        <>
            <ul>
                {
                    skills.map((s, idx) =>
                        <li className="mb-2" key={idx}>
                            {s}
                            &nbsp;
                            <button onClick={() => deleteOneSkill(idx)} className="btn btn-link">Delete</button>
                        </li>)
                }
            </ul>
        </>
    )
}

export default function TechSkills() {
    let [skills, setSkills] = useState(['Java', 'Python'])

    function addSkill(skill) {
        setSkills([...skills, skill])
    }

    function deleteSkill(idxToDelete) {
        setSkills(skills.filter((s, idx) => idx !== idxToDelete))
    }

    return (
        <>
            <h1>Skills</h1>
            <AddSkill addSkill={addSkill} />
            <p></p>
            <ListSkills skills={skills} deleteSkill={deleteSkill} />
        </>
    )
}
