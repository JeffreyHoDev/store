import { Table } from 'react-bootstrap'
import React, { useState } from 'react'
import './request_item.scss'

import RequestItemSummary from '../../component/request_item_summary/request_item_summary.component'

import { Button, Form } from 'react-bootstrap'

import { connect } from 'react-redux'
import { ADD_TO_SUMMARY } from '../../redux/requestitem/requestitem.action'

const RequestItemPage = ({add_to_summary, summaryItems}) => {

    const [request_quantity, handleRequestQuantity] = useState({})
    const [project_name, handleProjectName] = useState('')
    const [collection_date, handleCollectionDate] = useState('')

    const handleDynamicInput = (event, item_name) => handleRequestQuantity({
        ...request_quantity,
        [item_name]: event.target.value
    })

    let databaseData = [
        {
            "name": "item A",
            "id": 0
        },
        {
            "name": "item B",
            "id": 1
        },
        {
            "name": "item C",
            "id": 2
        },
    ]

    return (
        <div className='request_item_page'>
            <div className='request_content'>
                <h2>Request Item</h2>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Name</th>
                            <th>Request Quantities</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            databaseData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            <Form.Control type='number' min='0' id={item.id} onChange={(event) => handleDynamicInput(event, item.name)}></Form.Control>
                                        </td>
                                        <td><Button variant="primary" onClick={() => add_to_summary({name: item.name, quantity: request_quantity[item.name]})}>Add</Button></td>
                                    </tr> 
                                )
                            })
                        }
                    </tbody>
                </Table>
                <div className='request_item_others'>
                    <div className='request_item_projectContainer'>
                        <label htmlFor='project'>Project:</label>
                        <input type='text' onChange={(event) => handleProjectName(event.target.value)}></input>
                    </div>
                    <div className='request_item_collectiondateContainer'>
                        <label htmlFor='collection_date'>Collect Date:</label>
                        <input type='date' onChange={(event) => handleCollectionDate(event.target.value)}></input>
                    </div>
                </div>
                <Button variant="success">Submit Request</Button>
            </div>
            <div className='request_item_summary'>
                <RequestItemSummary />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    summaryItems: state.RequestItemReducer.summaryItems
})

const mapDispatchToProps = dispatch => ({
    add_to_summary: (item) => dispatch(ADD_TO_SUMMARY(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestItemPage)