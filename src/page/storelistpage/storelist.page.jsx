import React from 'react'
import './storelist.scss'

import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom' 

const StoreListPage = () => {
    return (
        <div className="storelist_page">
            <h2 className="storelist_title">Inhouse List</h2>
            <Button variant='info' className='addItem_btn'>Add Item</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Quantities</th>
                        <th>Type</th>
                        <th>Brand</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Item A</td>
                        <td>20</td>
                        <td>Product</td>
                        <td>Brand A</td>
                        <td><Link to='/edit/1'>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Item B</td>
                        <td>30</td>
                        <td>Accessories</td>
                        <td>Brand B</td>
                        <td><Link to='/edit/2'>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Item C</td>
                        <td>40</td>
                        <td>Asset</td>
                        <td>Brand C</td>
                        <td><Link to='/edit/3'>Edit</Link></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default StoreListPage