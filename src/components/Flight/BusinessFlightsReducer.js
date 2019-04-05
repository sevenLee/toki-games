import {BusinessFlightTypes} from './BusinessFlightsAction'
import {YourFlightTypes} from '../YourFlights/YourFlightsAction'
import {sortingTable} from '../../helpers/utils'
import BusinessFlights from './components/BusinessFlights'

const initialState = {
    list: [],
    isLoading: false,
    sorting: '',
    descending: false,
    activePage: 1
};

const flightItem = (state, action) => {
    switch (action.type) {
        case YourFlightTypes.ADD_BUSINESS_FLIGHT:
            return {
                flight: `${action.departure} -> ${action.arrival}`,
                departure: action.departureTime,
                arrival: action.arrivalTime
            }
        default:
            return state
    }
}

const cheapFlights = (state=initialState, action) => {
    switch (action.type) {
        case BusinessFlightTypes.FETCH_BUSINESS_FLIGHTS_ACTION:
            return {
                ...state,
                isLoading: true
            }
        case BusinessFlightTypes.FETCH_BUSINESS_FLIGHTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: action.payload,
            }
        case BusinessFlightTypes.SET_BUSINESS_FLIGHTS_SORTING:
            return {
                ...state,
                sorting: action.sorting,
                descending: action.descending
            }
        case BusinessFlightTypes.SET_BUSINESS_FLIGHTS_PAGE:
            return {
                ...state,
                activePage: action.activePage
            }
        case YourFlightTypes.ADD_BUSINESS_FLIGHT:
            return {
                ...state,
                list: [flightItem(undefined, action), ...state.list]
            }
        default:
            return state;
    }
}
export const getBusinessSorting = state => state.sorting
export const getBusinessDescending = state => state.descending
export const getBusinessActivePage = state => state.activePage
export const getBusinessListSize = state => state.list.length
export const getDisplayedBusinessFlights = (state, sorting) => {
    let displayedBusinessFlights = state.list
    if (sorting !== '') {
        displayedBusinessFlights = sortingTable(state.list, sorting, state.descending)
    }

    const startIndex = (state.activePage-1) * BusinessFlights.PAGE_SIZE;
    const offset = ((state.activePage * BusinessFlights.PAGE_SIZE) > state.list.length) ?
        state.list.length % (state.activePage * BusinessFlights.PAGE_SIZE) : BusinessFlights.PAGE_SIZE
    return displayedBusinessFlights.slice(startIndex, startIndex + offset)
}

export default cheapFlights;