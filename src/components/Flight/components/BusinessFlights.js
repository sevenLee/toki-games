import React, {PureComponent, Fragment} from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Pagination from 'react-js-pagination'
import { Table } from 'raww'
import * as FlightAction from '../BusinessFlightsAction'
import { getDisplayedBusinessFlights, getBusinessSorting, getBusinessDescending, getBusinessActivePage, getBusinessListSize } from '../../../redux/reducers'


export class BusinessFlights extends PureComponent {
    static PAGE_SIZE = 10

    setSorting = (sorting) => {
        if (sorting === this.props.businessSorting) {
            this.props.setBusinessFlightsSorting(sorting, !this.props.businessDescending)
        } else {
            this.props.setBusinessFlightsSorting(sorting, false)
        }
    }

    onPageChange = (pageNum) => {
        this.props.setBusinessFlightsPage(pageNum)
    }

    makePager = () => {
        const {businessActivePage, businessListSize} = this.props

        return (
            (businessListSize > BusinessFlights.PAGE_SIZE) &&
                <div className="clearfix">
                    <Pagination
                        activePage={businessActivePage*1}
                        itemsCountPerPage={BusinessFlights.PAGE_SIZE}
                        totalItemsCount={businessListSize}
                        pageRangeDisplayed={5}
                        onChange={(pageNum) => this.onPageChange(pageNum)}
                        innerClass={"pagination pull-left"}
                    />
                </div>
        )
    }

    componentDidMount() {
        this.props.fetchBusinessFlightsRequest()
    }

    render() {
        const {businessFlights, businessSorting, businessDescending, businessActivePage} = this.props
        const repoHeaderConfig = {
            hasIndex: true,
            pageNum: businessActivePage,
            pageSize: BusinessFlights.PAGE_SIZE,
            sortCol: businessSorting,
            descending: businessDescending,
        }

        const colMapping = {
            firstColIndex: {
                index: 0,
                align: 'text-left',
                headerContent: () => '#'
            },
            flight: {
                index        : 1,
                headerContent: () => 'Flight',
                style        : 'custom',
                align        : 'text-left',
                makeCell     : (val) => {
                    return (
                        <span>{val}</span>
                    )
                },
                sorting: {
                    onClick: () => this.setSorting('flight')
                }
            },
            departure: {
                index        : 2,
                headerContent: () => 'Departure',
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
                    onClick: () => this.setSorting('departure')
                }
            },
            arrival: {
                index        : 3,
                headerContent: () => 'Arrival',
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
                    onClick: () => this.setSorting('arrival')
                }
            }
        }

        return (
            <Fragment>
                <h3>Business Flights</h3>
                <div className="panel panel-transparent mt-lg">
                    <Table datas={businessFlights} colMap={colMapping} config={repoHeaderConfig}/>
                </div>
                {this.makePager()}
            </Fragment>
        )
    }
}

const action = {
    fetchBusinessFlightsRequest: FlightAction.fetchBusinessFlightsRequest,
    setBusinessFlightsSorting: FlightAction.setBusinessFlightsSorting,
    setBusinessFlightsPage: FlightAction.setBusinessFlightsPage
}

const mapStateToProps = (state) => {
    return {
        businessFlights: getDisplayedBusinessFlights(state),
        businessSorting: getBusinessSorting(state),
        businessDescending: getBusinessDescending(state),
        businessActivePage: getBusinessActivePage(state),
        businessListSize: getBusinessListSize(state)
    }
}

const BusinessFlightsContainer = connect(mapStateToProps, action)(BusinessFlights)

export default BusinessFlightsContainer