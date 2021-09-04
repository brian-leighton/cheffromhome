import React from 'react';

const TipsForm = ({renderInput, addInput, deleteInput}) => {
        return <React.Fragment>
                    <div className="col-12">
                        <h1 className="form__header form__header--secondary">Tips</h1>
                    </div>
                    <div className="form__recipe-directions u-relative flex flex__wrap flex__justify--center">
                        <div className="col-12 flex flex__justify--end u-margin-bottom-medium">
                            <div className="form__recipe--controls" onClick={() => addInput("tipsTotal")}>Add Tip</div>
                        </div>
                        <div className="form__recipe-directions--inputContainer">
                            {renderInput("tipsTotal", "tips", "recipe")}
                        </div>
                    </div>
                </React.Fragment>
}

export default TipsForm;