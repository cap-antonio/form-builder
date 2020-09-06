import React, { Component } from 'react'
import ThePopover from '../ThePopover'

import './results.css'

export default class Results extends Component {

    colorPicker(color) {
        switch (color) {
            case 'green':
                return 'btn btn-success'
            case 'red':
                return 'btn btn-danger'
            case 'yellow':
                return 'btn btn-warning'
            case 'grey':
                return 'btn btn-secondary'
            case 'blue':
                return 'btn btn-info'
            case 'white':
                return 'btn btn-light'
            default:
                return 'btn btn-secondary'
        }
    }
    render() {
        const { inputs, changeNumber, editMode,
            changeValue, mainForm, saveForm, removeSavedForm,
            savingLocked, saveHintShow, toggleSaveHint, savedForms,
            inputsChanged, showSavedJson
        } = this.props
        return (
            <div className={mainForm && "results_field"}>
                {mainForm
                    ? inputs.map(({ formName, fields, buttons }, key) => (
                        <div key={key}>
                            <div className="text-center form_name">
                                {formName}
                            </div>
                            <form>
                                {fields.map(({ label, type, value }, key) => {
                                    switch (type) {
                                        case 'numberfield':
                                        case 'number':
                                            return <div key={`${Math.random()} + ${key}`} className="row pt-3 pl-3">
                                                <div className="form_label">
                                                    {label ? `${label}:` : " "}
                                                </div>
                                                <i className="fa fa-minus-circle" onClick={() => changeNumber(value, label, -1)} />
                                                <div>{value}</div>
                                                <i className="fa fa-plus-circle" onClick={() => changeNumber(value, label, 1)} />
                                            </div>
                                        case 'textfield':
                                        case 'text':
                                            return <div key={`${Math.random()} + ${key}`} className="row pt-3 pl-3">
                                                <div className="input-group input-group-sm ">
                                                    <div className="form_label mt-1">
                                                        {label ? `${label}:` : " "}
                                                    </div>
                                                    <input type="text" className="form-control col-md-6"
                                                        defaultValue={value}
                                                        onBlur={(event) => changeValue(value, label, event.target.value)}
                                                        aria-describedby="inputGroup-sizing-sm" />
                                                </div>
                                            </div>
                                        case 'textarea':
                                            return <div key={`${Math.random()} + ${key}`} className="row pt-3 pl-3">
                                                <div className="form-group form-inline input-group-sm">
                                                    <label htmlFor="textareaField">
                                                        <div className="form_label mt-5">
                                                            {label ? `${label}:` : " "}
                                                        </div>
                                                    </label>
                                                    <textarea className="form-control" id="textareaField" rows="3"
                                                        defaultValue={value}
                                                        onBlur={(event) => changeValue(value, label, event.target.value)} />
                                                </div>
                                            </div>
                                        case 'checkbox':
                                            return <div key={`${Math.random()} + ${key}`} className="row pt-3 pl-3">
                                                <div className="form-check form-check-inline">
                                                    <label className="form-check-label" htmlFor="inlineCheckbox">
                                                        <div className="form_label">
                                                            {label ? `${label}:` : " "}
                                                        </div>
                                                    </label>
                                                    <input className="form-check-input mt-1" type="checkbox" id="inlineCheckbox" value="option1" />
                                                </div>
                                            </div>
                                        case 'date':
                                        case 'datefield':
                                            return <div key={`${Math.random()} + ${key}`} className="row pt-3 pl-3">
                                                <label htmlFor="datePicker">
                                                    <div className="form_label">
                                                        {label ? `${label}:` : " "}
                                                    </div>
                                                </label>
                                                <input type="date" defaultValue={value}
                                                    id="datePicker" onChange={(event) => changeValue(value, label, event.target.value)} />
                                            </div>
                                        case 'radio':
                                        case 'radio buttons':
                                            return <div key={`${Math.random()} + ${key}`} className="row pt-3 pl-3">
                                                <label htmlFor="datePicker">
                                                    <div className="form_label">
                                                        {label ? `${label}:` : " "}
                                                    </div>
                                                </label>
                                                {value && value.map(option => (
                                                    <div key={`${Math.random()} + ${option}`} className="col-sm-10">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name={label} id={option} value={option} />
                                                            <label className="form-check-label" htmlFor={option}>
                                                                {option ? option : "Forgot add options?"}
                                                            </label>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        default:
                                            return <div key={`${Math.random()} + ${key}`} className="row pt-3 pl-3">
                                                Check your inputs please with our guide
                                           </div>
                                    }
                                })}
                                <div className="row pt-3 pl-3">
                                    {buttons && buttons.map(({ label, color }) => (
                                        <button key={`${Math.random()}+${label}`} type="button" className={`${this.colorPicker(color)} btn-sm mx-1 mt-2`}>
                                            <div className="form_label pr-0">
                                                {label ? `${label}` : "Noname"}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </form>
                        </div>
                    ))
                    : savedForms.map(({ formName, fields, buttons }, key) => (
                        <div key={`${Math.random()} + ${key}`} className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{formName ? formName : "Noname"}</h5>
                                <div className="card-text">
                                    {fields.map(({ label, type, value }, key) => {
                                        switch (type) {
                                            case 'numberfield':
                                            case 'number':
                                                return <div key={`${Math.random()} + ${key}`} className="row pt-3 pl-3">
                                                    <div className="form_label">
                                                        {label ? `${label}:` : " "}
                                                    </div>
                                                    <i className="fa fa-minus-circle" />
                                                    <div>{value}</div>
                                                    <i className="fa fa-plus-circle" />
                                                </div>
                                            case 'textfield':
                                            case 'text':
                                                return <div key={`${Math.random()} + ${key}`} className="row pt-3 pl-3">
                                                    <div className="input-group input-group-sm ">
                                                        <div className="form_label mt-1">
                                                            {label ? `${label}:` : " "}
                                                        </div>
                                                        <input type="text" className="form-control col-md-6 col-6"
                                                            defaultValue={value} />
                                                    </div>
                                                </div>
                                            case 'textarea':
                                                return <div key={`${Math.random()} + ${key}`} className="row pt-3 pl-3">
                                                    <div className="form-group form-inline input-group-sm">
                                                        <label htmlFor="textareaField">
                                                            <div className="form_label mt-5">
                                                                {label ? `${label}:` : " "}
                                                            </div>
                                                        </label>
                                                        <textarea className="form-control" id="textareaField" rows="3"
                                                            defaultValue={value} />
                                                    </div>
                                                </div>
                                            case 'checkbox':
                                                return <div key={`${Math.random()} + ${key}`} className="row pt-3 pl-3">
                                                    <div className="form-check form-check-inline">
                                                        <label className="form-check-label" htmlFor="inlineCheckbox">
                                                            <div className="form_label">
                                                                {label ? `${label}:` : " "}
                                                            </div>
                                                        </label>
                                                        <input className="form-check-input mt-1" type="checkbox" id="inlineCheckbox" value="option1" />
                                                    </div>
                                                </div>
                                            case 'date':
                                            case 'datefield':
                                                return <div key={`${Math.random()} + ${key}`} className="row pt-3 pl-3">
                                                    <label htmlFor="datePicker">
                                                        <div className="form_label">
                                                            {label ? `${label}:` : " "}
                                                        </div>
                                                    </label>
                                                    <input type="date" defaultValue={value}
                                                        id="datePicker" />
                                                </div>
                                            case 'radio':
                                            case 'radio buttons':
                                                return <div key={`${Math.random()} + ${key}`} className="row pt-3 pl-3 col-sm-10">
                                                    <label htmlFor="datePicker">
                                                        <div className="form_label">
                                                            {label ? `${label}:` : " "}
                                                        </div>
                                                    </label>
                                                    {value && value.map(option => (
                                                        <div key={`${Math.random()} + ${option}`} className="col-sm-10">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name={label} id={option} value={option} />
                                                                <label className="form-check-label" htmlFor="gridRadios">
                                                                    {option ? option : "Forgot add options?"}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            default:
                                                return <div key={`${Math.random()} + ${key}`} className="row pt-3 pl-3">
                                                    Check your inputs please with our guide
                                            </div>
                                        }
                                    })}
                                    <div className="row pt-3 pl-3">
                                        {buttons && buttons.map(({ label, color }) => (
                                            <button key={`${Math.random()}+${label}`} type="button"
                                                className={`${this.colorPicker(color)} btn-sm mx-1 mt-2`}>
                                                <div className="form_label pr-0">
                                                    {label ? `${label}` : "Noname"}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer border-success">
                                <button type="button" className="btn btn-success btn-sm mx-1 mt-2"
                                    data-toggle={inputsChanged && "modal"} data-target="#Modal"
                                    onClick={inputsChanged
                                        ? undefined
                                        : () => showSavedJson(savedForms[key])}>
                                    Show JSON
                                </button>

                                <button type="button" className="btn btn-danger btn-sm mx-1 mt-2"
                                    onClick={() => removeSavedForm(key, this.props.savedForms
                                        .some(sav => sav.formName === this.props.inputs[0].formName))}>
                                    Remove
                            </button>
                            </div>
                            <div className="modal fade bd-example-modal-sm" id="Modal" tabIndex="-1"
                                role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-sm" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="ModalLabel">
                                                You have unsaved inputs at the top
                                            </h5>
                                            <button type="button" className="close" data-dismiss="modal"
                                                aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            Are you sure you want to replace it?
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                                Cancel
                                            </button>
                                            <button type="button" className="btn btn-success" data-dismiss="modal"
                                                onClick={() => showSavedJson(savedForms[key])}>
                                                Show Json
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))


                }
                {mainForm && <div className="results_status_bar text-center ">
                    <hr />
                    <ThePopover hintShow={saveHintShow} toggleHint={toggleSaveHint}
                        popoverText={
                            <div className="saving_hint arrow">
                                You should change at least a form name
                            </div>
                        }
                        child={
                            <button id="settings_button" type="button" className={`btn btn-success m-0 ${(savingLocked || editMode) && `muted`}`}
                                onClick={
                                    !savingLocked
                                        ? () => saveForm(
                                            inputs,
                                            this.props.savedForms.some(sav => sav.formName === this.props.inputs[0].formName))
                                        : () => toggleSaveHint(true)}
                            >
                                {savingLocked
                                    ? <i className="fa fa-lock" />
                                    : editMode
                                        ? <span className="spinner-border spinner-border-sm mr-2 ml-2"
                                            role="status" aria-hidden="true" />
                                        : "save"}
                            </button>
                        } />
                </div>
                }
            </div>
        )
    }
}