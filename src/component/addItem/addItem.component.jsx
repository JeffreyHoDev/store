import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './addItem.scss'

import { connect } from 'react-redux'
import { DISPLAY_ADDITEM_COMPONENT } from '../../redux/storeitem/storeitem.action'

const AddItem = ({displayAddItem, toggleAddItem}) => {

    const [item_name, handleItemName] = useState('')
    const [brand, handleBrand] = useState('')
    const [available_quantity, handleAvailableQuantity] = useState(0)
    const [reserved_quantity, handleReservedQuantity] = useState(0)
    const [notice, handleNotice] = useState("")

    return ( 
    <div>
        {
            displayAddItem ?
        <div>
            <div className='background-page' onClick={toggleAddItem}></div>
            <div className={`addItem_container ${displayAddItem ? 'animate-appear' : ''} `}>
                <div className="addItem-header">
                    <h2>Add New Item</h2>
                    <Button className="cancel-btn" variant="secondary" onClick={toggleAddItem}>Cancel</Button>
                </div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Item Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter item name" onChange={(e) => handleItemName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Brand:</Form.Label>
                        <Form.Control type="text" placeholder="Enter item brand" onChange={(e) => handleBrand(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Available Quantity:</Form.Label>
                        <Form.Control type="number" placeholder="Enter current available quantities" onChange={(e) => handleAvailableQuantity(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Reserved Quantity:</Form.Label>
                        <Form.Control type="number" placeholder="Enter reserved quantities that will not display to others except Admin" onChange={(e) => handleReservedQuantity(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Notice</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Notification message to everyone about the item..." onChange={(e) => handleNotice(e.target.value)}/>
                    </Form.Group>
                    <Button className="addItem-submit-btn" variant="success" type="button">
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