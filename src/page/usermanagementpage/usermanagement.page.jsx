import React from 'react'
import './usermanagement.scss'

import { Button, Table } from 'react-bootstrap'

const UserManagementPage = () => {
    return (
        <div className="user_management_page">
            <h2 className="user_management_title">User List</h2>
            <Button variant='info' className='addUser_btn'>Add User</Button>
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
                        <td><Button variant="danger">Delete</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tom</td>
                        <td>tom@email.com</td>
                        <td>Admin</td>
                        <td><Button variant="danger">Delete</Button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>John</td>
                        <td>john@email.com</td>
                        <td>Basic</td>
                        <td><Button variant="danger">Delete</Button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default UserManagementPage