import React, {Component}from 'react'
import { connect } from 'react-redux'
import CheapFlights from '../../Flight/components/CheapFlights'
import BusinessFlights from '../../Flight/components/BusinessFlights'
import AddFlightForm from './AddFlightForm'
import * as YourFlightsAction from '../YourFlightsAction'


export class YourFlightsRoot extends Component {
    submit = values => {
        const {flightType, ...restValues} = values

        if(values.flightType === 'cheap') {
            this.props.addCheapFlight(restValues)
        } else {
            this.props.addBusinessFlight(restValues)
        }
    };

    getInitialValues() {
        return {
            flightType: 'cheap',
        };
    }

    render() {
        return (
            <section className="column-bottom">
                <AddFlightForm 
                    onSubmit={this.submit}
                    initialValues={this.getInitialValues()}
                />
                <CheapFlights/>
                <BusinessFlights/>
            </section>
        )
    }
}

const action = {
    addCheapFlight: YourFlightsAction.addCheapFlight,
    addBusinessFlight: YourFlightsAction.addBusinessFlight,
}

const YourFlightsRootContainer = connect(null, action)(YourFlightsRoot)


export default YourFlightsRootContainer