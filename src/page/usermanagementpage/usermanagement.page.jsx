import React from 'react'
import './usermanagement.scss'

import { Button, Table } from 'react-bootstrap'

import { connect } from 'react-redux'
import { SHOW_VERIFICATION_COMPONENT } from '../../redux/verification/verification.action'


const UserManagementPage = ({showVerification}) => {
    return (
        <div className="user_management_page">
            <h2 className="user_management_title">User List</h2>
            <Button variant='info' className='addUser_btn' onClick={() => showVerification(null)}>Add User</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Adrian</td>
                        <td>adrian@email.com</td>
                        <td>Basic</td>
                        <td><Button variant="danger" onClick={() => showVerification(12)}>Delete</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tom</td>
                        <td>tom@email.com</td>
                        <td>Admin</td>
                        <td><Button variant="danger" onClick={() => showVerification(2)}>Delete</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>John</td>
                        <td>john@email.com</td>
                        <td>Basic</td>
                        <td><Button variant="danger" onClick={() => showVerification(3)}>Delete</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}



const mapDispatchToProps = dispatch => ({
    showVerification: (id) => dispatch(SHOW_VERIFICATION_COMPONENT(id))
})

export default connect(null, mapDispatchToProps)(UserManagementPage)