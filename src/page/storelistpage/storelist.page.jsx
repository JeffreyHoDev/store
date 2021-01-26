import React, {useEffect, useMemo } from 'react'
import './storelist.scss'

import { Table, Button, Spinner } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom' 

import { connect } from 'react-redux'
import { DISPLAY_ADDITEM_COMPONENT, FETCH_ITEM_ASYNC } from '../../redux/storeitem/storeitem.action'

import { useTable } from 'react-table'

const StoreListPage = ({ toggleAddItem, fetchItem, storeItem, isFetching, redirectTo }) => {

    // useEffect(() => {
    //     fetchItem()
    // },[])

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
            Header: 'reserve',
            accessor: 'reserved_quantity'
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
            accessor: 'action',
            Cell: ({row}) => {
                return <Link to={`/edit/${row.original.item_id}`}>Detail</Link>
            }
        }
    ], [])


    const data = React.useMemo(() => storeItem,[])
    
    const tableInstance = useTable({ columns, data })
        
    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    } = tableInstance

    
    const history = useHistory()

    // START - To reload this page after use add the item
    if(redirectTo === 'reload'){
        history.go(0)
    }
    // END - To reload this page after use add the item

    return (
        <div className="storelist_page">
            <h2 className="storelist_title">Inhouse List</h2>
            <Button variant='info' className='addItem_btn' onClick={toggleAddItem}>Add Item</Button>
            {
                isFetching? <Spinner animation="border" variant="success" />
                :
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
            }
        </div>
    )
}

const mapStateToProps = state => ({
    storeItem: state.StoreItemReducer.storeItem,
    isFetching: state.StoreItemReducer.is_fetching,
    redirectTo: state.UrlReducer.redirectLink
})

const mapDispatchToProps = dispatch => ({
    toggleAddItem: () => dispatch(DISPLAY_ADDITEM_COMPONENT),
    fetchItem: () => dispatch(FETCH_ITEM_ASYNC())
})

export default connect(mapStateToProps, mapDispatchToProps)(StoreListPage)