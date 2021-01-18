import React from 'react'
import './deleteuser.scss'

import { Button, Form } from 'react-bootstrap'

import { connect } from 'react-redux'
import { RESET_AUTHORIZED } from '../../redux/verification/verification.action'

const DeleteUser = ({ authorized, capturedID, resetAuthorized }) => {
    return (
        <div>
        {
            authorized && capturedID !== null?
            <div>
                <div className="deleteuser-background" onClick={()=> resetAuthorized()}></div>
                <div className="deleteuser-container">
                <h3>Confirm Delete?</h3>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value="someemail@email.com" readOnly/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value="somename" readOnly/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" value="Admin" readOnly/>
                    </Form.Group>
                    <Button variant="danger" type="button">
                        Delete
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
    authorized: state.verificationReducer.authorized,
    capturedID: state.verificationReducer.capturedID
})

const mapDispatchToProps = dispatch => ({
    resetAuthorized: () => dispatch(RESET_AUTHORIZED())
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser)