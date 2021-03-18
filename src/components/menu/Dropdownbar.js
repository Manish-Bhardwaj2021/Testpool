import React, { useState } from 'react';
import Sidebarlink from './Sidebarlink';


function Dropdownbar(props) {

    const [open, setopen] = useState(false);

    const openhandler = () => {
        setopen(!open)
    }

    return (
        <div className="dropdownMenu" >
            <div className="dashLink" onClick={() => openhandler()}>
                <img src={"/img/" + props.navimg + ".png"} alt="menu-icon" />
                {props.name}
                <i class={open ? "fal fa-angle-up" : "fal fa-angle-down"}></i>
            </div>
            <div className={open ? "activeMenu" : "menuHide"}>
                {props.children}
            </div>
        </div>
    )
}
export default Dropdownbar;