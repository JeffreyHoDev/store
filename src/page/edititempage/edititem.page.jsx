import React from 'react'
import './edititem.scss'

import { Form, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const EditItemPage = () => {
    const { item_id } = useParams()
    return (
        <div className='edititem_page'>
            <h2 className="edititem_title">Edit Item {item_id}</h2>
            <Form>
                <Form.Group>
                    <Form.Label bold><span>Item Name:</span> </Form.Label>
                    <Form.Control plaintext readOnly defaultValue="Item A" />
                </Form.Group>
                <Form.Group>
                    <Form.Label><span>Quantities:</span> </Form.Label>
                    <Form.Control size='sm' type="number" placeholder="Current available quantities" min='0' />
                </Form.Group>
                <Form.Group>
                    <Form.Label><span>Type:</span></Form.Label>
                    <Form.Control plaintext readOnly defaultValue="Product" />
                </Form.Group>
                <Form.Group>
                    <Form.Label><span>Brand</span></Form.Label>
                    <Form.Control plaintext readOnly defaultValue="Brand A" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Save & Edit
                </Button>
            </Form>            
        </div>
    )
}

export default EditItemPage