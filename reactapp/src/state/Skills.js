import React, { useState } from 'react'

export default function Skills() {
    let [skills, setSkills] = useState([])

    function addSkill() {
        var skill = document.getElementById("txtSkill").value
        setSkills([...skills, skill])
        console.log(skills)
    }

    function deleteSkill(idxToDelete) {
        setSkills(skills.filter((s, idx) => idx !== idxToDelete))
    }

    function clearSkills() {
        setSkills([])
    }
    return (
        <>
            <h1>Skills</h1>
            Skill <input type="text" id="txtSkill" />
            <p></p>
            <button onClick={addSkill}>Add</button>
            <button onClick={clearSkills}>Clear</button>
            <p></p>
            <ul>
                {
                    skills.map((s, idx) =>
                        <li className="mb-2" key={idx}>
                            {s}
                            &nbsp;
                            <button onClick={() => deleteSkill(idx)} className="btn btn-sm btn-danger">Delete</button>
                        </li>)
                }
            </ul>
        </>
    )
}
