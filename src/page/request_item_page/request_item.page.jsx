import React from 'react'
import './request_item.scss'

const RequestItemPage = () => {
    return (
        <div className='request_item_container'>
            <button className="add_item-btn">Add Item</button>
            <div className='request_item_list'>
                <div className="request_item_item">
                    <select name="item" id="item-list">
                        <option value="volvo">Item A</option>
                        <option value="saab">Item B</option>
                        <option value="mercedes">Item C</option>
                        <option value="audi">Item D</option>
                    </select>
                    <input type='number' placeholder='Quantity' min='0'></input>
                    <button className="insert_item-btn">Add</button>
                </div>
                <div className="request_project">
                    <label htmlFor="request_project_label" className="request_project_label">Project:</label>
                    <input type="text" name='request_project_label'/>
                </div>
                <div className="request_item_collect_date">
                    <label htmlFor="collect_date" className="collect_date">Collection date:</label>
                    <input type="date" name='collect_date'/>
                </div>
            </div>
            <button className="submit-btn">Submit Request</button>
        </div>
    )
}

export default RequestItemPage