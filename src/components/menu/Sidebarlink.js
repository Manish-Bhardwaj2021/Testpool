import React from 'react';

function Sidebarlink(props) {
    return (
        <>
            <a className="dashLink" href={props.link}>
                <img src={"/img/" + props.navimg + ".png"} alt="menu-icon" /> 
                {props.name} 
            </a>
        </>
    )

}

export default Sidebarlink;
