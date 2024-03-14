import React from 'react'



export default function Team() {
    let players = [
        { name: 'Dhoni', role: 'Wicket Keeper and Captain'},
        { name: 'Jadeja', role: 'Spinner and Batsman' },
        { name: 'Ashwin', role: 'Spinner' }
    ]

    console.log(players)
    return (
        <>
            <h1>Team India</h1>
            <h2>Players</h2>
            <ul>
                {
                    players.map(p => <li>{p.name} - {p.role}</li>)
                }
            </ul>
        </>
    )
}
