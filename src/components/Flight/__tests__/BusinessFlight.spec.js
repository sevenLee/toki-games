import React from 'react'
import {BusinessFlights} from '../components/BusinessFlights'
import {mount} from 'enzyme'

const businessFlights = [
    {flight: "Thames -> Pasco", departure: "2019-04-05T20:19:40.384Z", arrival: "2019-04-05T22:12:12.645Z"},
    {flight: "Batna City -> Mariano Acosta", departure: "2019-04-05T20:21:28.894Z", arrival: "2019-04-05T22:54:13.011Z"},
    {flight: "Avellaneda -> Venado Tuerto", departure: "2019-04-05T18:51:39.801Z", arrival: "2019-04-05T19:53:53.401Z"},
    {flight: "28 de Noviembre -> Huanguelen", departure: "2019-04-05T19:56:20.511Z", arrival: "2019-04-05T21:49:49.398Z"},
    {flight: "San Jeronimo Norte -> Catriel", departure: "2019-04-05T19:53:54.671Z", arrival: "2019-04-05T20:38:03.034Z"},
    {flight: "Perito Moreno -> Esquel", departure: "2019-04-05T19:57:21.914Z", arrival: "2019-04-05T21:01:01.065Z"},
    {flight: "Remedios de Escalada -> San Luis", departure: "2019-04-05T18:45:46.198Z", arrival: "2019-04-05T20:55:03.663Z"},
    {flight: "Villa Mercedes -> Salsipuedes", departure: "2019-04-05T20:19:13.638Z", arrival: "2019-04-05T22:43:07.879Z"},
    {flight: "Villa Mercedes -> Ituzaingo", departure: "2019-04-05T19:04:18.807Z", arrival: "2019-04-05T20:53:22.226Z"},
    {flight: "Rio Segundo -> Bustinza", departure: "2019-04-05T18:16:49.683Z", arrival: "2019-04-05T19:54:23.234Z"},
    {flight: "Santiago del Estero -> San Guillermo", departure: "2019-04-05T19:50:22.535Z", arrival: "2019-04-05T21:01:53.488Z"},
    {flight: "Don Bosco -> Laguna Alsina", departure: "2019-04-05T19:11:40.066Z", arrival: "2019-04-05T20:21:21.596Z"},
    {flight: "Famailla -> Hersilia", departure: "2019-04-05T19:06:26.514Z", arrival: "2019-04-05T20:42:27.800Z"},
    {flight: "Maggiolo -> Posadas", departure: "2019-04-05T17:47:15.777Z", arrival: "2019-04-05T17:57:18.809Z"},
]

describe('<BusinessFlights />', () => {
    const props = {
        fetchBusinessFlightsRequest: jest.fn(),
        setBusinessFlightsSorting: jest.fn(),
        setBusinessFlightsPage: jest.fn(),
        businessFlights,
        businessActivePage: 1,
        businessListSize: 15
    }
    const wrapper = mount(<BusinessFlights {...props}/>)

    it('calls fetchBusinessFlightsRequest action after mounted', () => {
        expect(props.fetchBusinessFlightsRequest).toHaveBeenCalled()
    })

    it('render table with data correctly and display corect columns', () => {
        expect(wrapper.find('th').at(1).find('span').at(0).text()).toBe('Flight\u00a0▽')
        expect(wrapper.find('th').at(2).find('span').at(0).text()).toBe('Departure\u00a0▽')
    })

    it('calls setBusinessFlightsSorting action with table head click', () => {
        wrapper.find('th').at(1).children().simulate('click')
        expect(props.setBusinessFlightsSorting).toHaveBeenCalledWith('flight', false)
    })

    it('should render 6 buttons on pager', () => {
        expect(wrapper.find('.pagination').find('li').at(3).find('a').text()).toBe("2")
        expect(wrapper.find('.pagination').find('li').at(4).find('a').text()).toBe("⟩")
    })

    it('calls setBusinessFlightsPage action with clicking page 2 of pager', () => {
        wrapper.find('.pagination').find('li').at(3).simulate('click')
        expect(props.setBusinessFlightsPage).toHaveBeenCalledWith(2)
    })
})
