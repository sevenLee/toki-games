import React from 'react'
import {Link} from 'react-router-dom'


const MenuButtons = () => {
    return (
        <ul className="">
            <li><Link to="/flights" >Flights</Link></li>
            <li><Link to="/your-flights" >Your Flights</Link></li>
        </ul>
    )
}

export default MenuButtons