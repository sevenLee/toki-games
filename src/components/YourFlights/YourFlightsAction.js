import { put } from 'redux-saga/effects'

export const YourFlightTypes = {
    ADD_CHEAP_FLIGHT_ACTION: 'ADD_CHEAP_FLIGHT_ACTION',
    ADD_CHEAP_FLIGHT: 'ADD_CHEAP_FLIGHT',
    ADD_BUSINESS_FLIGHT_ACTION: 'ADD_BUSINESS_FLIGHT_ACTION',
    ADD_BUSINESS_FLIGHT: 'ADD_BUSINESS_FLIGHT',
}

export const addCheapFlight = (formValues) => ({
    type: YourFlightTypes.ADD_CHEAP_FLIGHT_ACTION, ...formValues
});
export function* addCheapFlightHandler(action) {
    const {type, ...payload} = action

    try{
        yield put({type: YourFlightTypes.ADD_CHEAP_FLIGHT, ...payload});
    }catch(e) {
        console.log(e)
    }
}

export const addBusinessFlight = (formValues) => ({
    type: YourFlightTypes.ADD_BUSINESS_FLIGHT_ACTION, ...formValues
});
export function* addBusinessFlightHandler(action) {
    const {type, ...payload} = action

    try{
        yield put({type: YourFlightTypes.ADD_BUSINESS_FLIGHT, ...payload});
    }catch(e) {
        console.log(e)
    }
}




