import Raect, { useState } from 'react';

function ApprovalTbls() {

    const [tabopen, settabopen] = useState(true);

    const tabHandler=()=>{
        settabopen(!tabopen)
    }


    return (
        <div className="borderLight">
            <div className="jobTitle borderBottom d-flex justify-content-between" onClick={()=>tabHandler()}>
                <h4>Job Posting Approvals (624)</h4>
                <i class={tabopen ? "fal fa-angle-up" : "fal fa-angle-down"}></i>
            </div>
            <div className={tabopen ? "activeTab" : "menuHide"}>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Reported by</th>
                            <th>Post date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>03/05/2021</td>
                            <td><button className="btn btn-warning pendingBtn">Pending</button></td>
                        </tr>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>03/05/2021</td>
                            <td><button className="btn btn-warning pendingBtn">Pending</button></td>
                        </tr>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>03/05/2021</td>
                            <td><button className="btn btn-warning pendingBtn">Pending</button></td>
                        </tr>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>03/05/2021</td>
                            <td><button className="btn btn-warning pendingBtn">Pending</button></td>
                        </tr>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>03/05/2021</td>
                            <td><button className="btn btn-warning pendingBtn">Pending</button></td>
                        </tr>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>03/05/2021</td>
                            <td><button className="btn btn-warning pendingBtn">Pending</button></td>
                        </tr>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>03/05/2021</td>
                            <td><button className="btn btn-warning pendingBtn">Pending</button></td>
                        </tr>
                        <tr>
                            <td>Entry Level Sales Position</td>
                            <td>Admin</td>
                            <td>03/05/2021</td>
                            <td><button className="btn btn-warning pendingBtn">Pending</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ApprovalTbls;