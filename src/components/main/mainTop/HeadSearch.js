import React from 'react';
import './HeadTop.css'

function HeadSearch() {
    return (
        <div className="col-md-7 borderLight ">
            <div className="searchBar d-flex">
                <select>
                    <option>all areas</option>
                    <option>areas one</option>
                    <option>areas two</option>
                    <option>areas three</option>
                </select>
                <input type="text" name="search" placeholder="Search all areas" className="form-control b-None" />
                <button className="searchBtn"><i className="fal fa-search"></i></button>
            </div>
        </div>
    )
}

export default HeadSearch;