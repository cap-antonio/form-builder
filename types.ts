import { Action } from "redux"

export type JSONInputType = {
    formName: string,
    fields: Array<InputFieldsType>,
    buttons: Array<InputButtonsType>
}
type InputFieldsType = {
    label: string | number | null,
    type: string,
    value: string | Array<string> | number | null |undefined
}
type InputButtonsType = {
    label: string,
    color: string
}

export const ON_INPUTS_CHANGE = 'ON_INPUTS_CHANGE'
export const CHANGE_NUMBER = 'CHANGE_NUMBER'
export const CHANGE_VALUE = 'CHANGE_VALUE'

export interface OnInputsChangeType extends Action {
    type: typeof ON_INPUTS_CHANGE,
    payload: JSONInputType
}

export interface ChangeNumberType extends Action {
    type: typeof CHANGE_NUMBER,
    payload: {
        value: number,
        name: string | null,
        sum: number
    }
}

export interface ChangeValueType extends Action {
    type: typeof CHANGE_VALUE,
    payload: {
        value: string | null, 
        name: string | null, 
        newValue: string | null
    }
}

export const EDIT_MODE_SWITCH = 'EDIT_MODE_SWITCH'
export const RESET_JSON_INPUTS = 'RESET_JSON_INPUTS'
export const SAVE_FORM = 'SAVE_FORM'
export const SAVE_LOCKER = 'SAVE_LOCKER'
export const REMOVE_SAVED_FORM = 'REMOVE_SAVED_FORM'
export const SHOW_SAVED_JSON = 'SHOW_SAVED_JSON'

export interface EditModeSwitchType extends Action {
    type: typeof EDIT_MODE_SWITCH,
    payload: boolean
}

export interface ResetJsonInputsType extends Action {
    type: typeof RESET_JSON_INPUTS,
    payload?: any
}
export interface SaveFormType extends Action {
    type: typeof SAVE_FORM,
    payload: Array<JSONInputType>
}
export interface SaveLockerType extends Action {
    type: typeof SAVE_LOCKER,
    payload: boolean
}
export interface RemoveSavedFormType extends Action {
    type: typeof REMOVE_SAVED_FORM,
    payload: number
}
export interface ShowSavedJSONType extends Action {
    type: typeof SHOW_SAVED_JSON,
    payload: JSONInputType
}

export const TOGGEL_INPUTS_CHANGE_INDICATOR = 'TOGGEL_INPUTS_CHANGE_INDICATOR'
export const TOGGLE_SAVE_HINT = 'TOGGLE_SAVE_HINT'
export const TOGGLE_RESET_HINT = 'TOGGLE_RESET_HINT'
export const TOGGLE_GUIDE_WINDOW = 'TOGGLE_GUIDE_WINDOW'

export interface ToggleInputsChangeIndicatorType extends Action {
    type: typeof TOGGEL_INPUTS_CHANGE_INDICATOR,
    payload: boolean
}
export interface ToggleSaveHintType extends Action {
    type: typeof TOGGLE_SAVE_HINT,
    payload: boolean
}
export interface ToggleResetHintType extends Action {
    type: typeof TOGGLE_RESET_HINT,
    payload: boolean
}

export interface ToggleGuideWindowType extends Action {
    type: typeof TOGGLE_GUIDE_WINDOW,
    payload?: any
}

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'

export interface ShowAlertNotificationType extends Action {
    type: typeof SHOW_NOTIFICATION,
    payload: string
}

export interface HideNotificationType extends Action {
    type: typeof HIDE_NOTIFICATION,
    payload?: any
}

export type AllActionTypes = OnInputsChangeType | ChangeNumberType | ChangeValueType
    | EditModeSwitchType | ResetJsonInputsType | SaveFormType | SaveLockerType
    | RemoveSavedFormType | ShowSavedJSONType | ToggleInputsChangeIndicatorType 
    | ToggleSaveHintType | ToggleResetHintType | ToggleGuideWindowType
    | ShowAlertNotificationType | HideNotificationType