import React from 'react'
import './adduser.scss'

import { Form, Button } from 'react-bootstrap'

import { connect } from 'react-redux'
import { RESET_AUTHORIZED } from '../../redux/verification/verification.action'

const AddUser = ({authorized, capturedID, resetAuthorized}) => {
    return (
        <div>
            {
                authorized && capturedID === null
                ?<div>
                    <div className="adduser-background" onClick={() => resetAuthorized()}></div>
                    <div className="adduser-container">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Role</Form.Label>
                                <Form.Control as="select">
                                <option>Admin</option>
                                <option>Basic</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add User
                            </Button>
                        </Form>    
                    </div>
                </div>: null
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

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)