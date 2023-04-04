import React from 'react'
import { useState, useEffect } from 'react'

const CountryData = () => {

    // <div key={filteredCountries[0].name.common}>
    //     <h2>{filteredCountries[0].name.common}</h2>
    //     <p>Capital: {filteredCountries[0].capital}</p>
    //     <p>Area: {filteredCountries[0].area}</p>

    //     {/* Show list of languages */}
    //     <h2>Languages</h2>
    //     <ul>
    //         {Object.values(filteredCountries[0].languages).map((language) => (
    //             <li key={language}>{language}</li>
    //         ))}
    //     </ul>

    //     {/* Show Country Flag */}
    //     <img style={{ maxWidth: '200px' }} src={filteredCountries[0].flags.svg} alt={`${filteredCountries[0].name.common} flag`} />
    // </div>

    return (
        <div>
            <div key={filteredCountries[0].name.common}>
                <h2>{filteredCountries[0].name.common}</h2>
                <p>Capital: {filteredCountries[0].capital}</p>
                <p>Area: {filteredCountries[0].area}</p>

                {/* Show list of languages */}
                <h2>Languages</h2>
                <ul>
                    {Object.values(filteredCountries[0].languages).map((language) => (
                        <li key={language}>{language}</li>
                    ))}
                </ul>

                {/* Show Country Flag */}
                <img style={{ maxWidth: '200px' }} src={filteredCountries[0].flags.svg} alt={`${filteredCountries[0].name.common} flag`} />
            </div>
        </div>
    )
}

export default CountryData