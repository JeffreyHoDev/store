import { Table } from 'react-bootstrap'
import React from 'react'
import './request_item.scss'

const RequestItemPage = () => {
    return (
        <div className='request_item_page'>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item Name</th>
                        <th>Request Quantities</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Item A</td>
                        <td><input type='number' min='0'></input></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Item B</td>
                        <td><input type='number' min='0'></input></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Item C</td>
                        <td><input type='number' min='0'></input></td>
                    </tr>
                </tbody>
            </Table>
            <div className='request_item_others'>
                <label htmlFor='project'>Project:</label>
                <input type='text'></input>
                <label htmlFor='collection_date'>Collect Date:</label>
                <input type='date'></input>
            </div>
            <button>Submit Request</button>
        </div>
    )
}

export default RequestItemPage