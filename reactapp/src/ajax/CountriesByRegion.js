import React, { useState, useEffect } from 'react'
import $ from 'jquery'

export default function CountriesByRegion() {
    let [countries, setCountries] = useState([])
    let [selectedCountries, setSelectedCountries] = useState([])
    let [regions, setRegions] = useState(new Set())

    useEffect(getAllCountries, [])

    function findAllRegions(countries) {
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
                    findAllRegions(countries)
                }
                ,
                error:
                    () => {
                        alert("Sorry! Could not get details of countries!!")
                    }
            }
        )
    }
    return (
        <>
            <h1>Countries</h1>
            <SelectRegion regions={regions}
                countries={countries}
                setSelectedCountries={setSelectedCountries} />
            <p></p>
            {
                selectedCountries.length > 0 && <DisplayCountries selectedCountries={selectedCountries} />
            }
        </>
    )
}

function SelectRegion({ regions, countries, setSelectedCountries }) {
    let [region, setRegion] = useState('')

    function getCountriesByRegion(e) {
        let region = e.target.value
        setRegion(region)
        if (region !== '') {
            // select countries by region 
            let selCountries = countries.filter(c => c.region === region)
            // Sort countries by name
            //selCountries.sort( (c1, c2) => c1.name.common.localeCompare(c2.name.common) )
            // Sort countries by population 
            selCountries.sort((c1, c2) => c2.population - c1.population)
            setSelectedCountries(selCountries)
        }
        else {
            setSelectedCountries([])
        }
    }
    return (
        <>
            Region :
            <select value={region} onChange={getCountriesByRegion}>
                <option value="">Select Region</option>
                {
                    Array.from(regions).map(r => <option value={r}>{r}</option>)
                }
            </select>
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
                            <img alt={c.name.common} title={c.name.official} src={c.flags.png}
                                style={{ width: '128px', height: '64px' }} />
                        </td>
                    </tr>
                )
            }
        </table>
    )
}