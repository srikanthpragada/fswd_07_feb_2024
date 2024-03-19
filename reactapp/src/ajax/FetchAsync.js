import React, { useEffect, useState, useRef } from 'react'

export default function FetchAsync() {
    const [now, setNow] = useState('')
    let txtCity = useRef()

    function getUTCTime() {
        async function getData() {
            // AJAX call
            var response = await fetch("http://worldtimeapi.org/api/timezone/Etc/UTC")
            var time = await response.json()
            setNow(time.datetime)
        }
        getData()
    }

    async function getTime() {
        // AJAX call
        try {
            var response = await fetch("http://worldtimeapi.org/api/timezone/" + txtCity.current.value)
            if (response.status === 404) {
                alert("Sorry! Invalid Input!")
            }
            else {
                var time = await response.json()
                setNow(time.datetime)
            }
        }
        catch (ex) {
            alert("Sorry! Error : " + ex)
        }
    }

    useEffect(getUTCTime, []);

    return (
        <>
            <h1>Fetch Demo</h1>
            Enter City : <input type="text" ref={txtCity} defaultValue="asia/kolkata" />
            <h2>{now}</h2>
            <button onClick={getTime}>India Time</button>

        </>
    )
}
