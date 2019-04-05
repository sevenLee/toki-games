import { call, put } from 'redux-saga/effects'
import api from '../../helpers/api'

export const CheapFlightTypes = {
    FETCH_CHEAP_FLIGHTS_ACTION: 'FETCH_CHEAP_FLIGHTS_ACTION',
    FETCH_CHEAP_FLIGHTS_SUCCESS: 'FETCH_CHEAP_FLIGHTS_SUCCESS',
    SET_CHEAP_FLIGHTS_SORTING: 'SET_CHEAP_FLIGHTS_SORTING',
    SET_CHEAP_FLIGHTS_PAGE: 'SET_CHEAP_FLIGHTS_Page',
    SEARCH_BY_FILTER: 'SEARCH_BY_FILTER'
}

export const setCheapFlightsPage = (activePage) => ({
    type: CheapFlightTypes.SET_CHEAP_FLIGHTS_PAGE, activePage
});

export const setCheapFlightsSorting = (sorting, descending) => ({
    type: CheapFlightTypes.SET_CHEAP_FLIGHTS_SORTING, sorting, descending
});

export const fetchCheapFlightsRequest = () => ({
    type: CheapFlightTypes.FETCH_CHEAP_FLIGHTS_ACTION
})
export function* fetchCheapFlightsHandler(action) {
    try {
        const result = yield call(api, 'cheap');
        yield put({type: CheapFlightTypes.FETCH_CHEAP_FLIGHTS_SUCCESS, payload: result});
    } catch (e) {
        console.log(e)
    }
}

export const searchByFilter = (filter, filterWords) => ({
    type: CheapFlightTypes.SEARCH_BY_FILTER,
    filterWords,
    filter
})


