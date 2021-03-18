import React from 'react';
import HeadProfile from './HeadProfile';
import HeadSearch from './HeadSearch';

function HeadTop(){
    return(
        <div className="row py-3 bx-shadow">
            <div className="col-md-1">
                <button className="toggleBtn"><i class="fas fa-bars"></i></button>
            </div>
            <HeadSearch/>
            <HeadProfile/>
        </div>
    )
}

export default HeadTop;