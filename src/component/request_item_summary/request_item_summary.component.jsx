import React from 'react'
import './request_item_summary.scss'

import { ListGroup } from 'react-bootstrap'

const RequestItemSummary = () => {
    return (
        <div className='request_item_summary_container'>
            <h3>Summary</h3>
            <ListGroup variant="flush">
                    <ListGroup.Item className='summary_item'><span>Item A - 20</span><button>Remove</button></ListGroup.Item>
                    <ListGroup.Item className='summary_item'><span>Item B - 30 </span><button>Remove</button></ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default RequestItemSummary