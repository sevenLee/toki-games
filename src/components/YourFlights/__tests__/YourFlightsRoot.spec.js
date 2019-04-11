import React from 'react'
import {Provider} from 'react-redux'
import YourFlightsRootContainer, {YourFlightsRoot} from '../components/YourFlightsRoot'
import {shallow, mount} from 'enzyme'
import configureStore from 'redux-mock-store'


describe('<YourFlightsRoot />', () => {
    it('should render YourFlightsRoot', () => {
        const wrapper = shallow(<YourFlightsRoot/>)
        console.log(wrapper.debug())
    })
})

describe('<YourFlightsRootContainer />', () => {
    let wrapper, store

    const initalState = {
        cheapFlights: {
            list: [],
            isLoading: false,
            sorting: '',
            descending: false,
            activePage: 1,
            filter: 'arrival',
            filterWords: ''
        },
        businessFlights: {
            list: [],
            isLoading: false,
            sorting: '',
            descending: false,
            activePage: 1
        },
        form: {
            flightForm: {
                values: {
                    flightType: "cheap"
                },
                initial: {
                    flightType: "cheap"
                },
                registeredFields: {
                    flightType: {},
                    departure: {},
                    arrival: {},
                    departureTime: {},
                    arrivalTime: {}
                },
                fields: {
                    flightType: {},
                    departure: {},
                    arrival: {},
                    departureTime: {},
                    arrivalTime: {}
                }
            }
        }
    }

    const mockStore = configureStore();
    store = mockStore(initalState)
    wrapper = mount( <Provider store={store}><YourFlightsRootContainer /></Provider> )

    it('should set form submit success with redux-form/SET_SUBMIT_SUCCEEDED', () => {
        wrapper.find('input[name="departure"]').simulate('change', {target: {value: 'Departure'}})
        wrapper.find('input[name="arrival"]').simulate('change', {target: {value: 'Arrival'}})
        wrapper.find('button[type="submit"]').getDOMNode().click()
        const action = store.getActions()
        expect(store.getActions()).toMatchSnapshot();
    })
})