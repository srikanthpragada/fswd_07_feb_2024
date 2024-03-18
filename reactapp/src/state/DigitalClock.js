import React, { useEffect, useState } from 'react'

export default function DigitalClock() {
    const [time, setTime] = useState("")

    useEffect(() => {
        var id = setInterval(updateTime, 1000)
        
        function cleanUp () {
            clearInterval(id)
        }

        return cleanUp;

    }, [])
  
    function updateTime() {
        var ct = new Date()
        setTime(ct.toTimeString().substring(0,8))
    }
    return (
        <h1>{time}</h1>
    )
}
