import React from 'react'
import CheapFlights from './CheapFlights'
import BusinessFlights from './BusinessFlights'

const FlightsRoot = () => {
    return (
        <section className="column-bottom">
            <CheapFlights showFilter={true}/>
            <BusinessFlights/>
        </section>
    )
}

export default FlightsRoot