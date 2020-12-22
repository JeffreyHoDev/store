import { Table } from 'react-bootstrap'
import React from 'react'
import './request_item.scss'

import RequestItemSummary from '../../component/request_item_summary/request_item_summary.component'

const RequestItemPage = () => {
    return (
        <div className='request_item_page'>
            <div className='request_content'>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Name</th>
                            <th>Request Quantities</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Item A</td>
                            <td><input type='number' min='0'></input></td>
                            <td><button>Add</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Item B</td>
                            <td><input type='number' min='0'></input></td>
                            <td><button>Add</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Item C</td>
                            <td><input type='number' min='0'></input></td>
                            <td><button>Add</button></td>
                        </tr>
                    </tbody>
                </Table>
                <div className='request_item_others'>
                    <div className='request_item_projectContainer'>
                        <label htmlFor='project'>Project:</label>
                        <input type='text'></input>
                    </div>
                    <div className='request_item_collectiondateContainer'>
                        <label htmlFor='collection_date'>Collect Date:</label>
                        <input type='date'></input>
                    </div>
                </div>
                <button>Submit Request</button>
            </div>
            <div className='request_item_summary'>
                <RequestItemSummary />
            </div>
        </div>
    )
}

export default RequestItemPage