import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './addItem.scss'

import { connect } from 'react-redux'
import {DISPLAY_ADDITEM_COMPONENT} from '../../redux/storeitem/storeitem.action'

const AddItem = ({displayAddItem, toggleAddItem}) => {
    return ( 
    <div>
        {
            displayAddItem ?
        <div>
            <div className='background-page'></div>
            <div className='addItem_container'>
                <Button className="cancel-btn" variant="warning" onClick={toggleAddItem}>Cancel</Button>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Item Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter item name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Brand:</Form.Label>
                        <Form.Control type="text" placeholder="Enter item brand" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Available Quantity:</Form.Label>
                        <Form.Control type="number" placeholder="Enter current available quantities" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
        : null
        }
    </div>
    )
}

const mapStateToProps = (state) => ({
    displayAddItem: state.StoreItemReducer.displayAddItem
})

const mapDispatchToProps = dispatch => ({
    toggleAddItem: () => dispatch(DISPLAY_ADDITEM_COMPONENT)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)