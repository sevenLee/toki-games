import React, {PureComponent} from 'react'

class Filter extends PureComponent {
    handleOnChange = (e) => {
        const filter = e.target.value
        this.props.searchByFilter(filter, this.props.filterWords)
    }

    handleInputOnChange = (e) => {
        e.preventDefault()
        const filterWords = e.target.value
        this.props.searchByFilter(this.props.filter, filterWords)
    }

    render() {
        return (
            <div className="clearfix">
                <div className="filter-box">
                    <label>Filter: </label>
                    <select onChange={this.handleOnChange}>
                        <option value="arrival">arrival</option>
                        <option value="departure">departure</option>
                    </select>
                    <input onChange={this.handleInputOnChange}/>
                </div>
            </div>
        )
    }
}

export default Filter
