import {watchFlightsRequest} from './flight'
import {fork} from 'redux-saga/effects'

export default function* rootSaga() {
    yield fork(watchFlightsRequest)
}