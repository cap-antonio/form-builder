import { saveLocker, saveForm, resetJsonInputs, removeSavedForm, onInputsChange, 
    toggleInputsChangeIndicator, changeValue, changeNumber, showAlertNotification, 
    hideAlertNotification, showSavedJson } from "./actions/actions"

export const onInputsChangedThunk = (payload, jsonInput) => {
    return async (dispatch) => {
        if (JSON.stringify(payload[0]) === JSON.stringify(jsonInput[0])) {
            return
        }
        function validateJSON(payload) {
            let checkedText
            try {
                checkedText = JSON.parse(payload)
            } catch (e) {
                checkedText = "error"
            }
            return checkedText
        }
        if (validateJSON(payload) === 'error') {
            await dispatch(resetJsonInputs())
            dispatch(onInputsChange(jsonInput[0]))
        } else {
            let newText = JSON.parse(payload)
            dispatch(onInputsChange(newText[0]))
            dispatch(saveLocker(false))
            dispatch(toggleInputsChangeIndicator(true))
        }
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
        dispatch(showAlertNotification('secondary'))
        dispatch(toggleInputsChangeIndicator(false))
        setTimeout(() => {
            dispatch(hideAlertNotification())
          }, 3000)
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
            dispatch(showAlertNotification('success'))
            setTimeout(() => {
                dispatch(hideAlertNotification())
              }, 3000)
        }
    }
}

export const removeSavedFormThunk = (key, formNameExist) => {
    return (dispatch) => {
        dispatch(removeSavedForm(key))
        dispatch(showAlertNotification('warning'))
        setTimeout(() => {
            dispatch(hideAlertNotification())
          }, 3000)
        if (formNameExist) {
            dispatch(saveLocker(true))
        }
        dispatch(saveLocker(false))
    }
}

export const showSaveJsonThunk = (payload) => {
    return (dispatch) => {
        dispatch(showSavedJson(payload))
        dispatch(showAlertNotification('secondary'))
        dispatch(toggleInputsChangeIndicator(false))
        setTimeout(() => {
            dispatch(hideAlertNotification())
          }, 3000)
    }
}
