import React, { useState, useRef } from 'react'
import $ from 'jquery'

export default function JQueryDemo() {
    const [now, setNow] = useState('')
    let txtTimeZone = useRef()

    function getDateTime() {
     
        $.ajax(
           'http://worldtimeapi.org/api/timezone/' + txtTimeZone.current.value,
           {
             success:(data) =>  setNow(data.datetime),
             error: 
                () =>{ 
                    setNow(''); // clear output 
                    alert("Sorry! Invalid Timezone!")
                }
           }
        )
    }

    return (
        <>
            <h2>AJAX with jQuery</h2>
            <h1>{now}</h1>
            TimeZone : <input type="text" ref={txtTimeZone} />
            <p></p>
            <button onClick={getDateTime}>Get DateTime</button>


        </>
    )
}
