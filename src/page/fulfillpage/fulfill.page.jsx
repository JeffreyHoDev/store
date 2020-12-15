import React from 'react'
import './fulfill.scss'

import { ListGroup } from 'react-bootstrap'

const FulfillPage = () => {
    return (
        <div className='fulfill-page'>
            <h2 className='fulfill-title'>Request ID #1</h2>
            <ListGroup variant="flush">
                <ListGroup.Item>1- Item A - 30</ListGroup.Item>
                <ListGroup.Item>2- Item B - 30</ListGroup.Item>
                <ListGroup.Item>3- Item C - 30</ListGroup.Item>
            </ListGroup>
            <div className='fulfill_others'>
                <label htmlFor='project'>Project:</label>
                <h5 name='project'>SBST</h5>
                <label htmlFor='collect_date'>Collect Date:</label>
                <h5 name='collect_date'>12nd Dec 2020</h5>
                <label htmlFor='requestor'>Requestor:</label>
                <h5 name='requestor'>Jeffrey</h5>
            </div>
            <div class='action-container'>
                <button>Complete</button>
                <button>Abandon</button>
            </div>
        </div>
    )
}

export default FulfillPage