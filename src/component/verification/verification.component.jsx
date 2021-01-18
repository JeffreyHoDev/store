import React, { useState } from 'react'
import './verification.scss'

import { Form, Button } from 'react-bootstrap' 

import { CLOSE_DISPLAY, verify_authorized_personAsync } from '../../redux/verification/verification.action'

import { connect } from 'react-redux'

const Verification = ({verificationDisplay, closeDisplay, verify_authorized_personAsync}) => {
    const [password, handlePassword] = useState('')
    return (
        <div>
            {verificationDisplay?
            <div>
                <div className="verification-background" onClick={() => closeDisplay()}></div>
                <div className='verification-container'>
                    <p className='explain_message'>This is to verify you are the authorized personnel to do the action</p>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value="hokahwai@hotmail.com" readOnly />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => handlePassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={() => verify_authorized_personAsync('hokahwai@hotmail.com', password)}>
                            Submit
                        </Button>
                    </Form>            
                </div>
            </div>
            : null}
        </div>
    )
}

const mapStateToProps = (state) => ({
    verificationDisplay: state.verificationReducer.verificationDisplay
})

const mapDispatchToProps = dispatch => ({
    closeDisplay: () => dispatch(CLOSE_DISPLAY),
    verify_authorized_personAsync: (email,password) => dispatch(verify_authorized_personAsync(email,password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Verification)