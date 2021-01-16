import React from 'react'
import './verification.scss'

import { Form, Button } from 'react-bootstrap' 

import { CLOSE_DISPLAY } from '../../redux/verification/verification.action'

import { connect } from 'react-redux'

const Verification = ({verificationDisplay, closeDisplay}) => {
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
                            <Form.Control type="email" value="SomeEmail@email.com" readOnly />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
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
    closeDisplay: () => dispatch(CLOSE_DISPLAY)
})

export default connect(mapStateToProps, mapDispatchToProps)(Verification)