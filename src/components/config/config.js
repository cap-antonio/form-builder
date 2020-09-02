import React, { Component, Fragment } from 'react'
import ThePopover from '../ThePopover'

import './config.css'


export default class Config extends Component {
    render() {
        const { changeHandler, editMode, editModeSwitch, inputs,
            resetJsonInputs, resetHintShow, savingLocked, toggleResetHint } = this.props
        return (
            <Fragment>
                <div className="config_field">
                    <pre className="input_field"
                        contentEditable="true"
                        suppressContentEditableWarning="true"
                        onBlur={(event) => {
                            changeHandler(event.currentTarget.innerText, inputs)
                            editModeSwitch(false)
                        }}
                        onClick={() => editModeSwitch(true)}>
                        {JSON.stringify(inputs, null, 1)}
                    </pre>
                    <div className="hint">
                        <i className={editMode ? "fa fa-unlock" : "fa fa-lock"} />
                        {editMode ? "click out to save" : "click on inputs to edit"}
                        <i className={editMode ? "fa fa-arrow-down" : "fa fa-arrow-up"} />
                    </div>

                </div>

                <div className="config_status_bar text-center">
                    <ThePopover hintShow={resetHintShow} toggleHint={toggleResetHint}
                        popoverText={
                            <div className="saving_hint arrow">
                                Nothing to reset. Change input before.
                            </div>
                        }
                        child={
                            <button type="button" className={`btn btn-danger ${savingLocked && `muted`}`}
                                onClick={!savingLocked ? () => resetJsonInputs() : () => toggleResetHint(true)}>
                                reset
                            </button>
                        } />
                </div>    
            </Fragment>

        )
    }
}
