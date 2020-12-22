import React from 'react'
import './requestlist.scss'
import { Table } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const RequestListPage = () => {
    return (
        <div className='requestlist_page'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Project</th>
                        <th>Requestor</th>
                        <th>Collect Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Project A</td>
                        <td>Adrian</td>
                        <td>1st July 2020</td>
                        <td><Link to='/fulfill/1'>Detail</Link></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Project B</td>
                        <td>Tim</td>
                        <td>1st July 2020</td>
                        <td><Link to='/fulfill/2'>Detail</Link></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Project C</td>
                        <td>Jason</td>
                        <td>1st July 2020</td>
                        <td><Link to='/fulfill/3'>Detail</Link></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default RequestListPage