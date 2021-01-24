import { Table } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import './request_item.scss'
import "react-datetime/css/react-datetime.css";
import Datetime from 'react-datetime'


import { Redirect } from 'react-router-dom'

import RequestItemSummary from '../../component/request_item_summary/request_item_summary.component'

import { Button, Form, Spinner } from 'react-bootstrap'

import { connect } from 'react-redux'
import { ADD_TO_SUMMARY, SUBMIT_REQUEST_ASYNC } from '../../redux/requestitem/requestitem.action'
import { FETCH_ITEM_ASYNC } from '../../redux/storeitem/storeitem.action'

const RequestItemPage = ({add_to_summary, fetch_items, errorMessage, isFetching, redirectTo, storeItems, summaryItems, submit_request}) => {

    const [request_quantity, handleRequestQuantity] = useState({})
    const [project_name, handleProjectName] = useState('')
    const [collection_date, handleCollectionDate] = useState('')

    const handleDynamicInput = (event, item_name) => handleRequestQuantity({
        ...request_quantity,
        [item_name]: event.target.value
    })

    useEffect(() => {
        fetch_items()
    }, [])

    if(redirectTo.length !== 0){
        return <Redirect to={redirectTo} />
    }

    return (
        <div>
        {
            isFetching ? <Spinner animation="border" variant="success" />
            :
            <div className='request_item_page'>
                <div className='request_content'>
                    <h2>Request Item</h2>
                    <div className='request_item_others'>
                        <div className='request_item_projectContainer'>
                            <label htmlFor='project'>Project:</label>
                            <input type='text' onChange={(event) => handleProjectName(event.target.value)}></input>
                        </div>
                        <div className='request_item_collectiondateContainer'>
                            <label htmlFor='request_item_collectiondate'>Collection Date:</label>
                            <Datetime inputProps={{
                                placeholder: "Collection Date & Time"
                            }} 
                                onChange={handleCollectionDate}
                                utc={true}
                                initialValue=""
                                name="request_item_collectiondate"
                            />
                        </div>
                    </div>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Name</th>
                                <th>Available Quantities</th>
                                <th>Notice</th>
                                <th>Request Quantities</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                storeItems.map(item => {
                                    return (
                                        <tr key={item.item_id}>
                                            <td>{item.item_id}</td>
                                            <td>{item.item_name}</td>
                                            <td>{item.available_quantity}</td>
                                            <td>{item.notice}</td>
                                            <td>
                                                <Form.Control type='number' min='0' id={item.item_id} onChange={(event) => handleDynamicInput(event, item.item_name)}></Form.Control>
                                            </td>
                                            <td><Button variant="primary" onClick={() => add_to_summary({name: item.item_name, quantity: request_quantity[item.item_name], "item_id": item.item_id})}>Add</Button></td>
                                        </tr> 
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    <Button variant="success" type="button"
                        onClick={() => submit_request({
                            "collection_date": collection_date,
                            "project_name": project_name,
                            "item_details": summaryItems,
                            "requestor": "Jeffrey"
                        })}
                    >Submit Request</Button>
                    {errorMessage ? <p className="errorMessage">{errorMessage}</p> : null}
                </div>
                <div className='request_item_summary'>
                    <RequestItemSummary />
                </div>
            </div>
        }
        </div>
    )
}

const mapStateToProps = state => ({
    summaryItems: state.RequestItemReducer.summaryItems,
    storeItems: state.StoreItemReducer.storeItem,
    isFetching: state.StoreItemReducer.is_fetching,
    redirectTo: state.UrlReducer.redirectLink,
    errorMessage: state.RequestItemReducer.errorMessage
})

const mapDispatchToProps = dispatch => ({
    add_to_summary: (item) => dispatch(ADD_TO_SUMMARY(item)),
    fetch_items: () => dispatch(FETCH_ITEM_ASYNC()),
    submit_request: (dataObj) => dispatch(SUBMIT_REQUEST_ASYNC(dataObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestItemPage)