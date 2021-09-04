import {useState} from 'react';
import Modal from './Modal';

const Prompt = ({message, toggle, show}) => {

    return (
        <Modal toggleShow={toggle} show={show}>
            <div className="modal__prompt">
                <h3 className="modal__prompt--heading u-center-text u-margin-bottom-medium">{message}</h3>
                <div className="flex flex__justify--center">
                    <div className="btn__modal btn__discussion--red">Delete</div>
                </div>
            </div>
        </Modal>
    )
}

export default Prompt;