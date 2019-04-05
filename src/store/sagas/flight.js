import { takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchCheapFlightsHandler, CheapFlightTypes } from '../../components/Flight/CheapFlightsAction'
import { fetchBusinessFlightsHandler, BusinessFlightTypes } from '../../components/Flight/BusinessFlightsAction'
import { addCheapFlightHandler, addBusinessFlightHandler, YourFlightTypes } from '../../components/YourFlights/YourFlightsAction'

export function* watchFlightsRequest() {
    yield takeLatest(CheapFlightTypes.FETCH_CHEAP_FLIGHTS_ACTION, fetchCheapFlightsHandler)
    yield takeLatest(BusinessFlightTypes.FETCH_BUSINESS_FLIGHTS_ACTION, fetchBusinessFlightsHandler)
    yield takeEvery(YourFlightTypes.ADD_CHEAP_FLIGHT_ACTION, addCheapFlightHandler)
    yield takeEvery(YourFlightTypes.ADD_BUSINESS_FLIGHT_ACTION, addBusinessFlightHandler)
}
