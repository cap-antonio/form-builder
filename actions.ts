import { 
    ON_INPUTS_CHANGE, CHANGE_NUMBER, CHANGE_VALUE, 
    EDIT_MODE_SWITCH, RESET_JSON_INPUTS, SAVE_FORM, SAVE_LOCKER, 
    REMOVE_SAVED_FORM, TOGGLE_SAVE_HINT, TOGGLE_RESET_HINT, 
    SHOW_SAVED_JSON, TOGGEL_INPUTS_CHANGE_INDICATOR, TOGGLE_GUIDE_WINDOW, 
    SHOW_NOTIFICATION, HIDE_NOTIFICATION, JSONInputType, AllActionTypes 
} from './types'

export const onInputsChange = (newInput: JSONInputType): AllActionTypes => {
    return {
        type: ON_INPUTS_CHANGE,
        payload: newInput
    }
}

export const changeNumber = (value: number, 
    name: string | null, sum: number): AllActionTypes => {
    return {
        type: CHANGE_NUMBER,
        payload: {value, name, sum}
    }
}

export const changeValue = (value: string | null, 
    name: string | null, newValue: string | null): AllActionTypes => {
    return {
        type: CHANGE_VALUE,
        payload: {value, name, newValue}
    }
}

export const editModeSwitch = (status: boolean): AllActionTypes => {
    return {
        type: EDIT_MODE_SWITCH,
        payload: status
    }
}

export const resetJsonInputs = (): AllActionTypes => {
    return {
        type: RESET_JSON_INPUTS
    }
}

export const saveForm = (form: Array<JSONInputType>): AllActionTypes => {
    return {
        type: SAVE_FORM,
        payload: form
    }
}

export const saveLocker = (status: boolean): AllActionTypes => {
    return {
        type: SAVE_LOCKER,
        payload: status
    }
}

export const removeSavedForm = (key: number): AllActionTypes => {
    return {
        type: REMOVE_SAVED_FORM,
        payload: key
    }
}

export const showSavedJson = (payload: JSONInputType): AllActionTypes => {
    return {
        type: SHOW_SAVED_JSON,
        payload
    }
}

export const toggleInputsChangeIndicator = (status: boolean): AllActionTypes => {
    return {
        type: TOGGEL_INPUTS_CHANGE_INDICATOR,
        payload: status
    }
}

export const toggleSaveHint = (status: boolean): AllActionTypes => {
    return {
        type: TOGGLE_SAVE_HINT,
        payload: status
    }
}

export const toggleResetHint = (status: boolean): AllActionTypes => {
    return {
        type: TOGGLE_RESET_HINT,
        payload: status
    }
}

export const toggleGuide = (): AllActionTypes => {
    return {
        type: TOGGLE_GUIDE_WINDOW,
    }
}

export const showAlertNotification = (status: string): AllActionTypes => {
    return {
        type: SHOW_NOTIFICATION,
        payload: status
    }
}

export const hideAlertNotification = (): AllActionTypes => {
    return {
        type: HIDE_NOTIFICATION
    }
}