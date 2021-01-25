import React from 'react'
import './home.scss'

import { Button } from 'react-bootstrap'

import { connect } from 'react-redux'

import { Card, Spinner, Table } from 'react-bootstrap'
import PieChart from '../../component/pieChart/piechart.component'
import LineChart from '../../component/lineChart/lineChart.component'



import { useState, useEffect } from 'react'

import { FETCH_FOR_PIE_ASYNC, FETCH_FOR_LINE_ASYNC } from '../../redux/chart/chart.action'
import { FETCH_ITEM_ASYNC } from '../../redux/storeitem/storeitem.action'


const HomePage = ({ fetch_pie, fetch_line, fetchItem, isFetching, storeItem }) => {

    const today = new Date()
    const todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const defaultStartDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + '1';

    useEffect(() => {
        fetch_pie(defaultStartDate, todayDate)
        fetchItem()
    }, [])
    
    const [pieStartDate, piehandleStart] = useState('')
    const [pieEndDate, piehandleEnd] = useState('')
    const [lineStartDate, linehandleStart] = useState('')
    const [lineEndDate, linehandleEnd] = useState('')

    return (
        <div>
            {
                isFetching? <Spinner animation="border" variant="success" />
                :
                <div className="chart-page-container">
                    <Card className="chart-container">
                        <div className='chart-query'>
                            <div className="start_date_container">
                                <label htmlFor="pie_startdate">Start Date: </label>
                                <input type="date" name="pie_startdate" onChange={(e) => piehandleStart(e.target.value)}></input>
                            </div>
                            <div className="end_date_container">
                                <label htmlFor="pie_enddate">End Date: </label>
                                <input type="date" name="pie_enddate" onChange={(e) => piehandleEnd(e.target.value)}></input>
                            </div>
                            <Button variant="info" onClick={() => fetch_pie(pieStartDate, pieEndDate)}>Search</Button>
                        </div>
                        <div>
                            <PieChart/>
                        </div>
                    </Card>
                    {/* <Card className="chart-container">
                        <div className='chart-query'>
                            <div className="start_date_container">
                                <label htmlFor="line_startdate">Start Date: </label>
                                <input type="date" name="line_startdate" onChange={(e) => linehandleStart(e.target.value)}></input>
                            </div>
                            <div className="end_date_container">
                                <label htmlFor="line_enddate">End Date: </label>
                                <input type="date" name="line_enddate" onChange={(e) => linehandleEnd(e.target.value)}></input>
                            </div>
                            <Button variant="info" onClick={() => fetch_line(lineStartDate, lineEndDate)}>Search</Button>
                        </div>
                        <div>
                            <LineChart/>
                        </div>
                    </Card> */}
                    <div className="homepage-storelist">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Item</th>
                                    <th>Available Quantities</th>
                                    <th>Brand</th>
                                    <th>Notice</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    storeItem.map(each => {
                                        return (
                                            <tr>
                                                <td>{each.item_id}</td>
                                                <td>{each.item_name}</td>
                                                <td>{each.available_quantity - each.reserved_quantity}</td>
                                                <td>{each.brand}</td>
                                                <td>{each.notice}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    storeItem: state.StoreItemReducer.storeItem,
    isFetching: state.StoreItemReducer.is_fetching,
})

const mapDispatchToProps = dispatch => ({
    fetch_pie: (start, end) => dispatch(FETCH_FOR_PIE_ASYNC(start, end)),
    fetch_line: (start, end) => dispatch(FETCH_FOR_LINE_ASYNC(start, end)),
    fetchItem: () => dispatch(FETCH_ITEM_ASYNC())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)