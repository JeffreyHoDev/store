import { Table } from 'react-bootstrap'
import React, { useState, useMemo, useEffect } from 'react'
import './request_item.scss'
import "react-datetime/css/react-datetime.css";
import Datetime from 'react-datetime'

import { Redirect } from 'react-router-dom'

import RequestItemSummary from '../../component/request_item_summary/request_item_summary.component'

import { Button, Form, Spinner } from 'react-bootstrap'

import { connect } from 'react-redux'
import { ADD_TO_SUMMARY, SUBMIT_REQUEST_ASYNC } from '../../redux/requestitem/requestitem.action'
import { FETCH_ITEM_ASYNC } from '../../redux/storeitem/storeitem.action'

import { useTable } from 'react-table'

const RequestItemPage = ({add_to_summary, fetch_items, errorMessage, isFetching, redirectTo, storeItems, summaryItems, submit_request}) => {

    const [request_quantity, handleRequestQuantity] = useState([])
    const [project_name, handleProjectName] = useState('')
    const [collection_date, handleCollectionDate] = useState('')

    const handleDynamicInput = (event, item_name) => {
        const copy = [].concat(request_quantity)
        const deliver = copy.map(each => {
            if(each[item_name] !== item_name){
                return each
            }
            else {
                return {
                    "item_name": item_name,
                    "quantity": event.target.value
                }
            }
        })
        console.log(deliver)
        handleRequestQuantity(deliver)
    }

    const columns = useMemo(() => [
        {
            Header: '#',
            accessor: 'item_id'
        },
        {
            Header: 'Item',
            accessor: 'item_name'
        },
        {
            Header: 'A.Quantities',
            accessor: 'available_quantity'
        },
        {
            Header: 'Request Quantities',
            Cell: ({row}) => {
                return <input type='number' min='0' id={row.original.item_id} onChange={(event) => handleDynamicInput(event, row.original.item_name)} />
            }
        },
        {
            Header: 'Brand',
            accessor: 'brand'
        },
        {
            Header: 'Notice',
            accessor: 'notice'
        },
        {
            Header: 'Action',
            Cell: ({row}) => {
                return <Button variant="primary" onClick={() => add_to_summary({"name": row.original.item_name, "quantity": request_quantity[row.original.item_name], "item_id": row.original.item_id})}>Add</Button>
            }
        }
    ], [])


    const data = React.useMemo(() => storeItems,[])
    const tableInstance = useTable({ columns, data })
        
    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    } = tableInstance

    // useEffect(() => {
    //     fetch_items()
    // }, [])



    if(redirectTo.length !== 0){
        return <Redirect to={redirectTo} />
    }

    return (
        <div>
        {
            isFetching ? <Spinner animation="border" variant="success" />
            :
            <div className='request_item_page'>
                <div className='request_content'>
                    <h2>Request Item</h2>
                    <div className='request_item_others'>
                        <div className='request_item_projectContainer'>
                            <label htmlFor='project'>Project:</label>
                            <input type='text' onChange={(event) => handleProjectName(event.target.value)}></input>
                        </div>
                        <div className='request_item_collectiondateContainer'>
                            <label htmlFor='request_item_collectiondate'>Collection Date:</label>
                            <Datetime inputProps={{
                                placeholder: "Collection Date & Time"
                            }} 
                                onChange={handleCollectionDate}
                                utc={true}
                                initialValue=""
                                name="request_item_collectiondate"
                            />
                        </div>
                    </div>
                    <Table {...getTableProps()}>
                        <thead>
                        {// Loop over the header rows
                        headerGroups.map(headerGroup => (
                            // Apply the header row props
                            <tr {...headerGroup.getHeaderGroupProps()}>
                            {// Loop over the headers in each row
                            headerGroup.headers.map(column => (
                                // Apply the header cell props
                                <th {...column.getHeaderProps()}>
                                {// Render the header
                                column.render('Header')}
                                </th>
                            ))}
                            </tr>
                        ))}
                        </thead>
                        {/* Apply the table body props */}
                        <tbody {...getTableBodyProps()}>
                        {// Loop over the table rows
                        rows.map(row => {
                            // Prepare the row for display
                            prepareRow(row)
                            return (
                            // Apply the row props
                            <tr {...row.getRowProps()}>
                                {// Loop over the rows cells
                                row.cells.map(cell => {
                                // Apply the cell props
                                return (
                                    <td {...cell.getCellProps()}>
                                    {// Render the cell contents
                                    cell.render('Cell')}
                                    </td>
                                )
                                })}
                            </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                    <Button variant="success" type="button"
                        onClick={() => submit_request({
                            "collection_date": collection_date,
                            "project_name": project_name,
                            "item_details": summaryItems,
                            "requestor": "Jeffrey"
                        })}
                    >Submit Request</Button>
                    {errorMessage ? <p className="errorMessage">{errorMessage}</p> : null}
                </div>
                <div className='request_item_summary'>
                    <RequestItemSummary />
                </div>
            </div>
        }
        </div>
    )
}

const mapStateToProps = state => ({
    summaryItems: state.RequestItemReducer.summaryItems,
    storeItems: state.StoreItemReducer.storeItem,
    isFetching: state.StoreItemReducer.is_fetching,
    redirectTo: state.UrlReducer.redirectLink,
    errorMessage: state.RequestItemReducer.errorMessage
})

const mapDispatchToProps = dispatch => ({
    add_to_summary: (item) => dispatch(ADD_TO_SUMMARY(item)),
    fetch_items: () => dispatch(FETCH_ITEM_ASYNC()),
    submit_request: (dataObj) => dispatch(SUBMIT_REQUEST_ASYNC(dataObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestItemPage)