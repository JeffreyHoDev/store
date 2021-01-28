import React from 'react'
import './topbar.scss'

import { Nav, Spinner } from 'react-bootstrap'

import { connect } from 'react-redux'

const Topbar = ({ profile }) => {

    return (
        <div className='topbar-nav'>
            {
                profile.length <= 0 ? <Spinner variant="success"/>
                :
                <Nav.Item className='topbar-nav-item'>
                    <h5>{profile[0]["name"]}</h5>
                    <h5>{profile[0]["email"]}</h5>
                    <h5>{profile[0]["role"]}</h5>
                </Nav.Item>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    profile: state.UserReducer.profile
})

export default connect(mapStateToProps)(Topbar)