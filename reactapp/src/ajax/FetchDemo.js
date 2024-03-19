import React, { useEffect, useState } from 'react'

export default function FetchDemo() {
    const [now, setNow] = useState('')

    function getUTCTime() {
        // AJAX call
        fetch("http://worldtimeapi.org/api/timezone/Etc/UTC")
            .then(response => response.json())
            .then(data => setNow(data.datetime))
    }

    function getIndiaTime() {
        // AJAX call
        fetch("http://worldtimeapi.org/api/timezone/asia/kolkata")
            .then(response => response.json())
            .then(data => {
                if (data.error)
                    alert(data.error)
                else
                    setNow(data.datetime)
            }
            )
    }


    useEffect(getUTCTime, []);

    return (
        <>
            <h1>Fetch Demo</h1>
            <h2>{now}</h2>
            <button onClick={getIndiaTime}>India Time</button>

        </>
    )
}
