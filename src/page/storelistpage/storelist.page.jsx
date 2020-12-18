import React from 'react'
import './storelist.scss'

import { Table } from 'react-bootstrap'

const StoreListPage = () => {
    return (
        <div className="storelist_page">
            <h2 className="storelist_title">Inhouse List</h2>
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
                        <td><button>Edit</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Item B</td>
                        <td>30</td>
                        <td>Accessories</td>
                        <td>Brand B</td>
                        <td><button>Edit</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Item C</td>
                        <td>40</td>
                        <td>Asset</td>
                        <td>Brand C</td>
                        <td><button>Edit</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default StoreListPage