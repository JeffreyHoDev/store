import React from 'react'
import './request_item_summary.scss'

import { ListGroup } from 'react-bootstrap'

import { connect } from 'react-redux'

const RequestItemSummary = ({summary_items}) => {
    console.log(summary_items)
    return (
        <div className='request_item_summary_container'>
            <h3>Summary</h3>
            {
                summary_items.map((item,index) => {
                    return(<ListGroup variant="flush" key={index}>
                        <ListGroup.Item className='summary_item'><span>{item.item} - {item.request_quantity}</span><button>Remove</button></ListGroup.Item>
                    </ListGroup>)
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    summary_items: state.RequestItemReducer.summaryItems
})

export default connect(mapStateToProps)(RequestItemSummary)