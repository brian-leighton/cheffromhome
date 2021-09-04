import React, {useState} from 'react';
import {connect} from 'react-redux';
import SVGIcon from '../icons/SvgIcon';
import * as actions from '../../actions';
import Input from '../forms/Input';
import Prompt from '../modal/Prompt';

const ForumResponse = ({response, id, user, editResponse}) => {
    const [editing, toggleEdit] = useState(false);
    const [inputValue, handleInput] = useState(response.response);
    const [showModal, toggleModal] = useState(false);
    

    return(
        <div className="forum__response flex flex__wrap">
            {editing ? <div className="col-12" style={{position: "relative"}}>
                            <Input handleInput={handleInput} value={inputValue}/>
                            <div onClick={() => editResponse(id, response.id, inputValue)}>Update Post</div>
                        </div> :
                        <p className="col-12 forum__response--post">{response.response}</p>}
            <h3 className="">-{response.info.username}</h3>
            {user ?
                <React.Fragment>
                    {user._id === response.info.id ?
                    // if the user looking at the response is the same as the one who posted it allow them to edit and delete
                     <div className="flex forum__post--controls">
                         <p className="u-margin-right-medium" onClick={() => toggleEdit(!editing)}><SVGIcon icon="#icon-edit"/></p> 
                         <p onClick={() => toggleModal(!showModal)}>Delete</p>
                    </div> :
                     null }
                </React.Fragment> :
            null}
            {showModal ? <Prompt 
                            message={"Are you sure you want to delete your response?"}
                            toggle={toggleModal}
                            show={showModal}
                               
                        />
                             : null}
        </div>
    ) 
}

const mapStateToProps = state => {
    return {user: state.auth.user}
}

export default connect(mapStateToProps, actions)(ForumResponse);