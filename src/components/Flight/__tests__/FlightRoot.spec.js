import React from 'react'
import FlightsRoot from '../components/FlightsRoot'
import {shallow} from 'enzyme'

describe('<FlightsRoot />', () => {
    it('should render FlightsRoot', () => {
        const wrapper = shallow(<FlightsRoot/>)
        console.log(wrapper.debug())
    })
})
