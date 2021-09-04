import React from 'react';
import SvgIcon from '../icons/SvgIcon';

const Modal = props => {
    return(
        <div id="modal" className="modal" onClick={() => {props.toggleShow(!props.show)}}>
            <div className={props.classList ? props.classList.join(" ") : ""} onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div> 
    )
}

export default Modal;