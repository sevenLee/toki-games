import {CheapFlightTypes} from './CheapFlightsAction'
import {YourFlightTypes} from '../YourFlights/YourFlightsAction'
import {sortingTable} from '../../helpers/utils'
import CheapFlights from './components/CheapFlights'

const initialState = {
    list: [],
    isLoading: false,
    sorting: '',
    descending: false,
    activePage: 1,
    filter: 'arrival',
    filterWords: ''
};

let listRaw = [];

const flightItem = (state, action) => {
    switch (action.type) {
        case YourFlightTypes.ADD_CHEAP_FLIGHT:
            return {
                departure: action.departure,
                arrival: action.arrival,
                departureTime: action.departureTime,
                arrivalTime: action.arrivalTime
            }
        default:
            return state
    }
}

const getFilterList = (list, filter, filterWords) => {
    if (filterWords === '') {
        return list
    }

    return list.reduce((result, elm) => {
        if (elm[filter] && elm[filter].toUpperCase().indexOf(filterWords.toUpperCase()) > -1) {
            result.push(elm)
        }
        return result
    }, [])
}

const cheapFlights = (state=initialState, action) => {
    switch (action.type) {
        case CheapFlightTypes.FETCH_CHEAP_FLIGHTS_ACTION:
            return {
                ...state,
                isLoading: true
            }
        case CheapFlightTypes.FETCH_CHEAP_FLIGHTS_SUCCESS:
            listRaw = action.payload
            return {
                ...state,
                isLoading: false,
                list: action.payload,
            }
        case CheapFlightTypes.SET_CHEAP_FLIGHTS_SORTING:
            return {
                ...state,
                sorting: action.sorting,
                descending: action.descending
            }
        case CheapFlightTypes.SET_CHEAP_FLIGHTS_PAGE:
            return {
                ...state,
                activePage: action.activePage
            }
        case YourFlightTypes.ADD_CHEAP_FLIGHT:
            return {
                ...state,
                list: [flightItem(undefined, action), ...state.list]
            }
        case CheapFlightTypes.SEARCH_BY_FILTER:
            return {
                ...state,
                filter: action.filter,
                filterWords: action.filterWords,
                list: getFilterList(listRaw, action.filter, action.filterWords)
            };
        default:
            return state;
    }
}
export const getCheapSorting = state => state.sorting
export const getCheapDescending = state => state.descending
export const getCheapActivePage = state => state.activePage
export const getCheapListSize = state => state.list.length
export const getCheapFilter = state => state.filter
export const getCheapFilterWords = state => state.filterWords

export const getDisplayedCheapFlights = (state, sorting) => {
    let displayedCheapFlights = state.list
    if(!displayedCheapFlights || displayedCheapFlights.length === 0) return []

    if (sorting !== '') {
        displayedCheapFlights = sortingTable(state.list, sorting, state.descending)
    }

    const startIndex = (state.activePage-1) * CheapFlights.PAGE_SIZE;
    const offset = ((state.activePage * CheapFlights.PAGE_SIZE) > state.list.length) ?
        state.list.length % (state.activePage * CheapFlights.PAGE_SIZE) : CheapFlights.PAGE_SIZE

    return displayedCheapFlights.slice(startIndex, startIndex + offset)
}

export default cheapFlights;