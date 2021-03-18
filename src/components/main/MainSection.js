import Raect from 'react';
import MyApproval from './dashboard/MyApproval';
import HeadTop from './mainTop/HeadTop';

function MainSection() {
    return (
        <div className="container-fluid">
            <HeadTop />
            <MyApproval />
            
        </div>
    )
}


export default MainSection;