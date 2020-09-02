import { saveLocker, saveForm, resetJsonInputs, removeSavedForm, onInputsChange, toggleInputsChangeIndicator, changeValue, changeNumber } from "./actions/actions"

export const onInputsChangedThunk = (payload, jsonInput) => {
    return (dispatch) => {
        let text = JSON.parse(payload)
        if (JSON.stringify(text[0]) === JSON.stringify(jsonInput[0])) {
            return
        }
        dispatch(onInputsChange(text[0]))
        dispatch(saveLocker(false))
        dispatch(toggleInputsChangeIndicator(true))
    }
}

export const changeValueThunk = (value, name, newValue) => {
    return (dispatch) => {
        dispatch(changeValue(value, name, newValue))
        if(value === newValue) {
            return
        }
        dispatch(toggleInputsChangeIndicator(true))
    }
}

export const changeNumberThunk = (value, name, sum) => {
    return (dispatch) => {
        dispatch(changeNumber(value, name, sum))
        dispatch(toggleInputsChangeIndicator(true))
    }
}

export const resetJsonInputsThunk = () => {
    return (dispatch) => {
        dispatch(resetJsonInputs())
        dispatch(toggleInputsChangeIndicator(false))
    }
}

export const saveFormThunk = (form, formNameExist) => {
    return (dispatch) => {
        if (formNameExist) {
            dispatch(saveLocker(true))
        } else {
            dispatch(saveForm(form))
            dispatch(resetJsonInputs())
            dispatch(toggleInputsChangeIndicator(false))
        }
    }
}

export const removeSavedFormThunk = (key, formNameExist) => {
    return (dispatch) => {
        dispatch(removeSavedForm(key))
        if (formNameExist) {
            dispatch(saveLocker(true))
        }
        dispatch(saveLocker(false))
    }
}