import React from 'react'
import './fulfill.scss'

const FulfillPage = () => {
    return (
        <div className='fulfill-page'>
            <h2>Fulfill Request</h2>
            <h4>ID NO: 1</h4>
            <table className="fulfill-table">
                <tr className='fulfill-table-row'>
                    <th>Item</th>
                    <th>Quantity</th>
                </tr>
                <tbody>
                    <tr className='fulfill-table-row'>
                        <td className='fulfill-table-cell'>Item A</td>
                        <td className='fulfill-table-cell'>39</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FulfillPage