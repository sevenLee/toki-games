import React, {Component} from 'react'
import MenuButtons from './MenuButtons'

class Sidebar extends Component {
    state={
        isMenuOpen: true
    }

    render() {
        return (
            <aside className="column sidebar">
                <header className="column-top-left">Flight Schedule</header>
                <nav className="column-bottom">
                    <MenuButtons />
                </nav>
            </aside>
        )
    }
}

export default Sidebar
