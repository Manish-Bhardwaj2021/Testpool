import React from 'react';
import ApprovalTbls from './ApprovalTbls'

function MyApproval(){
    return(
        <div className="container py-4">
            <div className="row">
                <div className="col-md-8">

                    <ApprovalTbls/>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}


export default MyApproval;