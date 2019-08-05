import { call, put } from 'redux-saga/effects'
import api from '../../helpers/api'

export const BusinessFlightTypes = {
    FETCH_BUSINESS_FLIGHTS_ACTION: 'FETCH_BUSINESS_FLIGHTS_ACTION',
    FETCH_BUSINESS_FLIGHTS_SUCCESS: 'FETCH_BUSINESS_FLIGHTS_SUCCESS',
    SET_BUSINESS_FLIGHTS_SORTING: 'SET_BUSINESS_FLIGHTS_SORTING',
    SET_BUSINESS_FLIGHTS_PAGE: 'SET_BUSINESS_FLIGHTS_Page'
}

export const setBusinessFlightsPage = (activePage) => ({
    type: BusinessFlightTypes.SET_BUSINESS_FLIGHTS_PAGE, activePage
});

export const setBusinessFlightsSorting = (sorting, descending) => ({
    type: BusinessFlightTypes.SET_BUSINESS_FLIGHTS_SORTING, sorting, descending
});

export const fetchBusinessFlightsRequest = () => ({
    type: BusinessFlightTypes.FETCH_BUSINESS_FLIGHTS_ACTION
})
export function* fetchBusinessFlightsHandler(action) {
    try {
        const result = yield call(api, 'business');
        yield put({type: BusinessFlightTypes.FETCH_BUSINESS_FLIGHTS_SUCCESS, payload: result});
    } catch (e) {
        console.log('#### fetchBusinessFlightsHandler:', e)
    }
}



