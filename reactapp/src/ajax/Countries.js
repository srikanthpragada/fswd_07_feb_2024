import React, { useState, useEffect } from 'react'
import $ from 'jquery'

export default function Countries() {
    let [countries, setCountries] = useState([])
    let [selectedCountries, setSelectedCountries] = useState([])
    let [region, setRegion] = useState('Asia')
    let [regions, setRegions] = useState(new Set())
    let [message, setMessage] = useState('')

    useEffect(getAllCountries, [])

    function getAllRegions(countries) {
        let values = new Set()
        for (let c of countries) {
            values.add(c.region)
        }

        setRegions(values)
    }

    function getAllCountries() {
        $.ajax(
            'https://restcountries.com/v3.1/all',
            {
                success: (countries) => {
                    setCountries(countries)
                    getAllRegions(countries)
                }
                ,
                error:
                    () => {
                        alert("Sorry! Could not get details of countries!!")
                    }
            }
        )
    }

    function updateRegion(e) {
        setRegion(e.target.value)
    }

    function getCountriesByRegion() {
        let selCountries = countries.filter(c => c.region === region)
        setSelectedCountries(selCountries)
        setMessage("")
        if (selCountries.length === 0) {
            setMessage("Invalid Region")
        }

    }

    return (
        <>
            <h1>Countries</h1>
            Region  :  <input value={region} onChange={updateRegion} />
            &nbsp; <span className="text-danger">{message} </span>
            <p />
            <button onClick={getCountriesByRegion}>Get Countries</button>
            <p></p>
            {
                selectedCountries.length > 0 && <DisplayCountries selectedCountries={selectedCountries} />
            }
        </>
    )
}


function DisplayCountries({ selectedCountries }) {
    return (
        <table className="table table-bordered">
            <tr>
                <th>Name</th>
                <th>Capital</th>
                <th>Population</th>
                <th>Area</th>
                <th>Flag</th>
            </tr>

            {
                selectedCountries.map(c =>
                    <tr>
                        <td>{c.name.common}</td>
                        <td>{c.capital ? c.capital[0] : ''}</td>
                        <td className="text-end">{c.population}</td>
                        <td className="text-end">{c.area}</td>
                        <td className="text-center">
                            <img alt={c.name.common} src={c.flags.png} style={{ width: '128px', height: '64px' }} />
                        </td>
                    </tr>
                )
            }


        </table>
    )
}