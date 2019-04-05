import React, {PureComponent, Fragment} from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Pagination from 'react-js-pagination'
import { Table } from 'raww'
import Filter from './Filter'
import * as FlightAction from '../CheapFlightsAction'
import { getDisplayedCheapFlights, getCheapSorting, getCheapDescending,
    getCheapActivePage, getCheapListSize, getCheapFilter, getCheapFilterWords } from '../../../redux/reducers'


export class CheapFlights extends PureComponent {
    static PAGE_SIZE = 10

    setSorting = (sorting) => {
        if (sorting === this.props.cheapSorting) {
            this.props.setCheapFlightsSorting(sorting, !this.props.cheapDescending)
        } else {
            this.props.setCheapFlightsSorting(sorting, false)
        }
    }

    onPageChange = (pageNum) => {
        this.props.setCheapFlightsPage(pageNum)
    }

    makePager = () => {
        const {cheapActivePage, cheapListSize} = this.props

        return (
            (cheapListSize > CheapFlights.PAGE_SIZE) &&
                <div className="clearfix">
                    <Pagination
                        activePage={cheapActivePage*1}
                        itemsCountPerPage={CheapFlights.PAGE_SIZE}
                        totalItemsCount={cheapListSize}
                        pageRangeDisplayed={5}
                        onChange={(pageNum) => this.onPageChange(pageNum)}
                        innerClass={"pagination pull-left"}
                    />
                </div>
        )
    }

    componentDidMount() {
        this.props.fetchCheapFlightsRequest()
    }

    handleSearchByFilter = (filter, filterWords) => {
        this.props.searchByFilter(filter, filterWords)
    }

    render() {
        const {cheapFlights, cheapSorting, cheapDescending, cheapActivePage, cheapFilter, cheapFilterWords, showFilter} = this.props
        const repoHeaderConfig = {
            hasIndex: true,
            pageNum: cheapActivePage,
            pageSize: CheapFlights.PAGE_SIZE,
            sortCol: cheapSorting,
            descending: cheapDescending,
        }

        const colMapping = {
            firstColIndex: {
                index: 0,
                align: 'text-left',
                headerContent: () => '#'
            },
            departure: {
                index        : 1,
                headerContent: () => 'Departure',
                style        : 'custom',
                align        : 'text-left',
                makeCell     : (val) => {
                    return (
                        <span>{val}</span>
                    )
                },
                sorting: {
                    onClick: () => this.setSorting('departure')
                }
            },
            arrival: {
                index        : 2,
                headerContent: () => 'Arrival',
                style        : 'custom',
                align        : 'text-left',
                makeCell     : (val) => {
                    return (
                        <span>{val}</span>
                    )
                },
                sorting: {
                    onClick: () => this.setSorting('arrival')
                }
            },
            departureTime: {
                index        : 3,
                headerContent: () => 'Departure Time',
                style: 'custom',
                align        : 'text-left',
                makeCell     : (val) => {
                    return (
                        <span>
                            {moment(val).format('YYYY/MM/DD HH:mm:ss')}
                        </span>
                    )
                },
                sorting: {
                    onClick: () => this.setSorting('departureTime')
                }
            },
            arrivalTime: {
                index        : 4,
                headerContent: () => 'Arrival Time',
                style: 'custom',
                align        : 'text-left',
                makeCell     : (val) => {
                    return (
                        <span>
                            {moment(val).format('YYYY/MM/DD HH:mm:ss')}
                        </span>
                    )
                },
                sorting: {
                    onClick: () => this.setSorting('arrivalTime')
                }
            }
        }

        return (
            <Fragment>
                <h3>Cheap Flights</h3>
                {(showFilter) ?
                    <Filter
                        filter={cheapFilter}
                        filterWords={cheapFilterWords}
                        searchByFilter={this.handleSearchByFilter}
                    />
                    :
                    null
                }
                <div className="panel panel-transparent mt-lg">
                    <Table datas={cheapFlights} colMap={colMapping} config={repoHeaderConfig}/>
                </div>
                {this.makePager()}
            </Fragment>
        )
    }
}

const action = {
    fetchCheapFlightsRequest: FlightAction.fetchCheapFlightsRequest,
    setCheapFlightsSorting: FlightAction.setCheapFlightsSorting,
    setCheapFlightsPage: FlightAction.setCheapFlightsPage,
    searchByFilter: FlightAction.searchByFilter
}

const mapStateToProps = (state) => {
    return {
        cheapFlights: getDisplayedCheapFlights(state),
        cheapSorting: getCheapSorting(state),
        cheapDescending: getCheapDescending(state),
        cheapActivePage: getCheapActivePage(state),
        cheapListSize: getCheapListSize(state),
        cheapFilter: getCheapFilter(state),
        cheapFilterWords: getCheapFilterWords(state)
    }
}

const CheapFlightsContainer = connect(mapStateToProps, action)(CheapFlights)

export default CheapFlightsContainer