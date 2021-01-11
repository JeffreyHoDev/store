import React from 'react'
import './fulfill.scss'

import { ListGroup, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const FulfillPage = () => {
    const { request_id } = useParams()
    return (
        <div className='fulfill-page'>
            <h2 className='fulfill-title'>Request ID: {request_id}</h2>
            <ListGroup variant="flush">
                <ListGroup.Item>1. Item A - 30</ListGroup.Item>
                <ListGroup.Item>2. Item B - 30</ListGroup.Item>
                <ListGroup.Item>3. Item C - 30</ListGroup.Item>
            </ListGroup>
            <div className='fulfill_others'>
                <label htmlFor='project'>Project:</label>
                <h6 name='project'>SBST</h6>
                <label htmlFor='collect_date'>Collect Date:</label>
                <h6 name='collect_date'>12nd Dec 2020</h6>
                <label htmlFor='requestor'>Requestor:</label>
                <h6 name='requestor'>Jeffrey</h6>
            </div>
            <div class='action-container'>
                <Button variant="success">Complete</Button>
                <Button variant="danger">Abandon</Button>
            </div>
        </div>
    )
}

export default FulfillPage