import React from 'react'
import './additem.scss'

import { Form, Button } from 'react-bootstrap'

const AddItemPage = () => {
    return (
        <div className='additem_page'>
            <h2 className="additem_title">Add New Item</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter item name" size='sm'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Quantities</Form.Label>
                    <Form.Control size='sm' type="number" placeholder="Current available quantities" min='0' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control as="select" size='sm'>
                        <option>Product</option>
                        <option>Asset</option>
                        <option>Accessories</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" placeholder="Brand of item" size='sm'/>
                </Form.Group>

                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>            
        </div>
    )
}

export default AddItemPage