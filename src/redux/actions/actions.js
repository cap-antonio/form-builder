import { ON_INPUTS_CHANGE, CHANGE_NUMBER, CHANGE_VALUE, 
    EDIT_MODE_SWITCH, RESET_JSON_INPUTS, SAVE_FORM, SAVE_LOCKER, 
    REMOVE_SAVED_FORM, TOGGLE_SAVE_HINT, TOGGLE_RESET_HINT, 
    SHOW_SAVED_JSON, TOGGEL_INPUTS_CHANGE_INDICATOR, TOGGLE_GUIDE_WINDOW } from './types'

export const onInputsChange = (newInput) => {
    return {
        type: ON_INPUTS_CHANGE,
        payload: newInput
    }
}

export const changeNumber = (value, name, sum) => {
    return {
        type: CHANGE_NUMBER,
        payload: {value, name, sum}
    }
}

export const changeValue = (value, name, newValue) => {
    return {
        type: CHANGE_VALUE,
        payload: {value, name, newValue}
    }
}

export const editModeSwitch = (status) => {
    return {
        type: EDIT_MODE_SWITCH,
        payload: status
    }
}

export const resetJsonInputs = () => {
    return {
        type: RESET_JSON_INPUTS
    }
}

export const saveForm = (form) => {
    return {
        type: SAVE_FORM,
        payload: form
    }
}

export const saveLocker = (status) => {
    return {
        type: SAVE_LOCKER,
        payload: status
    }
}

export const removeSavedForm = (key) => {
    return {
        type: REMOVE_SAVED_FORM,
        payload: key
    }
}

export const showSavedJson = (payload) => {
    return {
        type: SHOW_SAVED_JSON,
        payload
    }
}

export const toggleInputsChangeIndicator = (status) => {
    return {
        type: TOGGEL_INPUTS_CHANGE_INDICATOR,
        payload: status
    }
}

export const toggleSaveHint = (status) => {
    return {
        type: TOGGLE_SAVE_HINT,
        payload: status
    }
}

export const toggleResetHint = (status) => {
    return {
        type: TOGGLE_RESET_HINT,
        payload: status
    }
}

export const toggleGuide = () => {
    return {
        type: TOGGLE_GUIDE_WINDOW,
    }
}
