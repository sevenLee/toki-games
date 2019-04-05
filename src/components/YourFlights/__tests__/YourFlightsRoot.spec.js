import React from 'react'
import {YourFlightsRoot} from '../components/YourFlightsRoot'
import {shallow} from 'enzyme'

describe('<YourFlightsRoot />', () => {
    it('should render YourFlightsRoot', () => {
        const wrapper = shallow(<YourFlightsRoot/>)
        console.log(wrapper.debug())
    })
})