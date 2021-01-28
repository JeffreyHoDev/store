import React from 'react'
import './sidebar.scss'

import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { LOGOUT } from '../../redux/user/user.action'

const Sidebar = ({ profile, logout }) => {
    return (
        <div className='sidebar'>
            
                {
                    profile[0]["role"] === "Admin"
                    ?
                    <nav className='sidebar-nav'>
                        <Link to="/" className='sidebar-nav-item'>Home</Link>
                        <Link to="/user_management" className='sidebar-nav-item'>User Management</Link>
                        <Link to="/request_list" className='sidebar-nav-item'>Request List</Link>
                        <Link to="/request_item" className='sidebar-nav-item'>Request Item</Link>
                        <Link to="/store_list" className='sidebar-nav-item'>Store Management</Link>
                        <Link to="/history" className='sidebar-nav-item'>History</Link>
                        <Link to="#" className='sidebar-nav-item' onClick={() => logout()}>Logout</Link>
                    </nav>
                    :
                    <nav className='sidebar-nav'>
                        <Link to="/" className='sidebar-nav-item'>Home</Link>
                        <Link to="/request_item" className='sidebar-nav-item'>Request Item</Link>
                        <Link to="/history" className='sidebar-nav-item'>History</Link>
                        <Link to="#" className='sidebar-nav-item' onClick={() => logout()}>Logout</Link>
                    </nav>
                }
        </div>
    )
}

const mapStateToProps = state => ({
    profile: state.UserReducer.profile
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(LOGOUT())
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)