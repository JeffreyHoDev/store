import React from 'react'
import './requestlist.scss'
import { Table } from 'react-bootstrap'

const RequestListPage = () => {
    return (
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
                    <td>button</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Project B</td>
                    <td>Tim</td>
                    <td>1st July 2020</td>
                    <td>button</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Project C</td>
                    <td>Jason</td>
                    <td>1st July 2020</td>
                    <td>button</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default RequestListPage