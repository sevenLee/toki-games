import React from 'react';
import ReactDOM from 'react-dom';
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'bootstrap/dist/css/bootstrap.css'
import '../style/app.css';
import Root from '../components/Root';
import {store} from '../store/index'

configure({adapter: new Adapter()})

describe('<Root />', () => {
    /**
     * @jest-environment jsdom
     */
    it('should render Root', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Root store={store}/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})