import {combineReducers} from 'redux'
import cheapFlights, * as fromCheapFlights from '../../components/Flight/CheapFlightsReducer'
import businessFlights, * as fromBusinessFlights from '../../components/Flight/BusinessFlightsReducer'
import { reducer as formReducer } from 'redux-form';

const appReducer = combineReducers({
    cheapFlights,
    businessFlights,
    form: formReducer
})

export const getDisplayedCheapFlights = state =>
    fromCheapFlights.getDisplayedCheapFlights(state.cheapFlights, state.cheapFlights.sorting)
export const getCheapSorting = state => fromCheapFlights.getCheapSorting(state.cheapFlights)
export const getCheapDescending = state => fromCheapFlights.getCheapDescending(state.cheapFlights)
export const getCheapActivePage = state => fromCheapFlights.getCheapActivePage(state.cheapFlights)
export const getCheapListSize = state => fromCheapFlights.getCheapListSize(state.cheapFlights)
export const getCheapFilter = state => fromCheapFlights.getCheapFilter(state.cheapFlights)
export const getCheapFilterWords = state => fromCheapFlights.getCheapFilterWords(state.cheapFlights)

export const getDisplayedBusinessFlights = state =>
    fromBusinessFlights.getDisplayedBusinessFlights(state.businessFlights, state.businessFlights.sorting)
export const getBusinessSorting = state => fromBusinessFlights.getBusinessSorting(state.businessFlights)
export const getBusinessDescending = state => fromBusinessFlights.getBusinessDescending(state.businessFlights)
export const getBusinessActivePage = state => fromBusinessFlights.getBusinessActivePage(state.businessFlights)
export const getBusinessListSize = state => fromBusinessFlights.getBusinessListSize(state.businessFlights)

const rootReducer = (state, action) => {
    let  newState = {}
    switch(action.type) {
        case 'RESET_DISPLAY_STATES': {
            newState = {}
            return appReducer(newState, action)
        }
        default:
            return appReducer(state, action)
    }
}

export default rootReducer