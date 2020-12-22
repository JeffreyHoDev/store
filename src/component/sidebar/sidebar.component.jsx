import React from 'react'
import './sidebar.scss'

import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <nav className='sidebar-nav'>
                <Link to="/" className='sidebar-nav-item'>Home</Link>
                <Link to="/request_list" className='sidebar-nav-item'>Request List</Link>
                <Link to="/request_item" className='sidebar-nav-item'>Request Item</Link>
                <Link to="/store_list" className='sidebar-nav-item'>Store Management</Link>
            </nav>
        </div>
    )
}

export default Sidebar