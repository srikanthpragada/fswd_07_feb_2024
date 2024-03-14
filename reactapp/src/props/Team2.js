import React from 'react'

function Player({ player }) {
    return (
        <>
            <h3 className="text-primary">{player.name}</h3>
            <h4>{player.role}</h4>
        </>
    )
}

export default function Team2() {
    let players = [
        { name: 'Dhoni', role: 'Wicket Keeper and Captain' },
        { name: 'Jadeja', role: 'Spinner and Batsman' },
        { name: 'Ashwin', role: 'Spinner' }
    ]
    return (
        <>
            <h1>Team India</h1>
            <h2>Players</h2>
            <hr/>
            {
                players.map( (p, idx) => <div key={idx}><Player player={p} /> <hr/></div> )
            }
 
        </>
    )
}
