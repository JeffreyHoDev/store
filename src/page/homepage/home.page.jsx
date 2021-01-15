import React from 'react'
import './home.scss'

import { Button } from 'react-bootstrap'

import { Card } from 'react-bootstrap'
import PieChart from '../../component/pieChart/piechart.component'
import LineChart from '../../component/lineChart/lineChart.component'

import { useState } from 'react'


const HomePage = () => {
    
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
                        <input type="date" name="pie_startdate" onChange={piehandleStart}></input>
                    </div>
                    <div className="end_date_container">
                        <label htmlFor="pie_enddate">End Date: </label>
                        <input type="date" name="pie_enddate" onChange={piehandleEnd}></input>
                    </div>
                    <Button variant="info">Search</Button>
                </div>
                <div>
                    <PieChart/>
                </div>
            </Card>
            <Card className="chart-container">
                <div className='chart-query'>
                    <div className="start_date_container">
                        <label htmlFor="line_startdate">Start Date: </label>
                        <input type="date" name="line_startdate" onChange={linehandleStart}></input>
                    </div>
                    <div className="end_date_container">
                        <label htmlFor="line_enddate">End Date: </label>
                        <input type="date" name="line_enddate" onChange={linehandleEnd}></input>
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

export default HomePage