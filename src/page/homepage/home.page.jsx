import React from 'react'
import './home.scss'

import { Card } from 'react-bootstrap'
import Labelline from '../../component/pieChart/piechart.component'

const HomePage = () => {
    return (
        <Card>
            <div>
                <Labelline/>
            </div>
        </Card>
    )
}

export default HomePage