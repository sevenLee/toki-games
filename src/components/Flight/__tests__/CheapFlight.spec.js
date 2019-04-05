import React from 'react'
import {CheapFlights} from '../components/CheapFlights'
import {mount} from 'enzyme'

const cheapFlights = [
    {departure: "San Jeronimo Norte", arrival: "Cosquin", departureTime: 1554484221636, arrivalTime: 1554488882094},
    {departure: "General Pico", arrival: "Granadero Baigorria", departureTime: 1554480052859, arrivalTime: 1554481469827},
    {departure: "El Talar", arrival: "Azara", departureTime: 1554480723497, arrivalTime: 1554481428773},
    {departure: "Open Door", arrival: "Barrio Fisherton", departureTime: 1554494027636, arrivalTime: 1554496174995},
    {departure: "Drabble", arrival: "Balnearia", departureTime: 1554492810452, arrivalTime: 1554496218376},
    {departure: "Mendoza", arrival: "Ingeniero Beaugey", departureTime: 1554487561942, arrivalTime: 1554495672032},
    {departure: "San Pedro", arrival: "Las Catitas", departureTime: 1554489718498, arrivalTime: 1554497875581},
    {departure: "Pontevedra", arrival: "Cinco Saltos", departureTime: 1554486281575, arrivalTime: 1554490909457},
    {departure: "Mendiolaza", arrival: "La Punta", departureTime: 1554490678176, arrivalTime: 1554493556024},
    {departure: "Jose Marmol", arrival: "Goya", departureTime: 1554486177578, arrivalTime: 1554496177437},
]

describe('<CheapFlights />', () => {
    const props = {
        fetchCheapFlightsRequest: jest.fn(),
        setCheapFlightsSorting: jest.fn(),
        setCheapFlightsPage: jest.fn(),
        cheapFlights,
        cheapActivePage: 1,
        cheapListSize: 15
    }
    const wrapper = mount(<CheapFlights {...props}/>)

    it('calls fetchCheapFlightsRequest action after mounted', () => {
        expect(props.fetchCheapFlightsRequest).toHaveBeenCalled()
    })

    it('render table with data correctly and display corect columns', () => {
        expect(wrapper.find('th').at(2).find('span').at(0).text()).toBe('Arrival\u00a0▽')
        expect(wrapper.find('th').at(3).find('span').at(0).text()).toBe('Departure Time\u00a0▽')
    })

    it('calls setCheapFlightsSorting action with table head click', () => {
        wrapper.find('th').at(2).children().simulate('click')
        expect(props.setCheapFlightsSorting).toHaveBeenCalledWith('arrival', false)
    })

    it('should render 6 buttons on pager', () => {
        expect(wrapper.find('.pagination').find('li').at(3).find('a').text()).toBe("2")
        expect(wrapper.find('.pagination').find('li').at(4).find('a').text()).toBe("⟩")
    })

    it('calls setCheapFlightsPage action with clicking page 2 of pager', () => {
        wrapper.find('.pagination').find('li').at(3).simulate('click')
        expect(props.setCheapFlightsPage).toHaveBeenCalledWith(2)
    })
})
