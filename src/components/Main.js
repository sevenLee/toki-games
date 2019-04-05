import React from 'react'
import {Switch, Route} from 'react-router-dom'
import FlightsRoot from './Flight/components/FlightsRoot'
import YourFlightsRoot from './YourFlights/components/YourFlightsRoot'
import NotFound from './NotFound'

const Main = () => (
    <div className="column main">
        <header className="column-top-right">&nbsp;</header>
        <Switch>
            <Route exact path="/" component={FlightsRoot}/>}/>
            <Route exact path="/flights" component={FlightsRoot}/>
            <Route exact path="/your-flights" component={YourFlightsRoot}/>
            <Route component={NotFound}/>
        </Switch>
    </div>
)

export default Main
