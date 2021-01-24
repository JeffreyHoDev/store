import React from 'react'
import './home.scss'

import { Button } from 'react-bootstrap'

import { connect } from 'react-redux'

import { Card } from 'react-bootstrap'
import PieChart from '../../component/pieChart/piechart.component'
import LineChart from '../../component/lineChart/lineChart.component'

import { useState, useEffect } from 'react'

import { FETCH_FOR_PIE_ASYNC, FETCH_FOR_LINE_ASYNC } from '../../redux/chart/chart.action'

const HomePage = ({ fetch_pie, fetch_line }) => {

    const today = new Date()
    const todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const defaultStartDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + '1';

    useEffect(() => {
        fetch_pie(defaultStartDate, todayDate)
        fetch_line(defaultStartDate, todayDate)
    }, [])
    
    const [pieStartDate, piehandleStart] = useState('')
    const [pieEndDate, piehandleEnd] = useState('')
    const [lineStartDate, linehandleStart] = useState('')
    const [lineEndDate, linehandleEnd] = useState('')

    return (
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
            <Card className="chart-container">
                <div className='chart-query'>
                    <div className="start_date_container">
                        <label htmlFor="line_startdate">Start Date: </label>
                        <input type="date" name="line_startdate" onChange={(e) => linehandleStart(e.target.value)}></input>
                    </div>
                    <div className="end_date_container">
                        <label htmlFor="line_enddate">End Date: </label>
                        <input type="date" name="line_enddate" onChange={(e) => linehandleEnd(e.target.value)}></input>
                    </div>
                    <Button variant="info">Search</Button>
                </div>
                <div>
                    <LineChart/>
                </div>
            </Card>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetch_pie: (start, end) => dispatch(FETCH_FOR_PIE_ASYNC(start, end)),
    fetch_line: (start, end) => dispatch(FETCH_FOR_LINE_ASYNC(start, end)),
})

export default connect(null, mapDispatchToProps)(HomePage)