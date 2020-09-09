import { 
    saveLocker, saveForm, resetJsonInputs, removeSavedForm, onInputsChange, 
    toggleInputsChangeIndicator, changeValue, changeNumber, showAlertNotification, 
    hideAlertNotification, showSavedJson 
} from "./actions/actions"
import { Dispatch } from "react"
import { AllActionTypes, JSONInputType } from "./actions/types"
import { ThunkAction } from "redux-thunk"
import { AppStateType } from "./reducer"

type DispatchType = Dispatch<AllActionTypes>
type ThunkType = ThunkAction<void, AppStateType, unknown, AllActionTypes>


export const onInputsChangedThunk = (payload: string,
    jsonInput: Array<JSONInputType>): ThunkType => {
    return async (dispatch: DispatchType) => {
        if (JSON.stringify(payload[0]) === JSON.stringify(jsonInput[0])) {
            return
        }
        function validateJSON(payload: string) {
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

export const changeNumberThunk = (value: number, 
    name: string | null, sum: number): ThunkType => {
        return (dispatch: DispatchType) => {
            dispatch(changeNumber(value, name, sum))
            dispatch(toggleInputsChangeIndicator(true))
        }
}

export const changeValueThunk = (value: string | null, 
    name: string | null, alue: string | null): ThunkType => {
        return (dispatch: DispatchType) => {
            dispatch(changeValue(value, name, alue))
            if(value === alue) {
                return
            }
            dispatch(toggleInputsChangeIndicator(true))
        }
}

export const resetJsonInputsThunk = (): ThunkType => {
    return (dispatch: DispatchType) => {
        dispatch(resetJsonInputs())
        dispatch(showAlertNotification('secondary'))
        dispatch(toggleInputsChangeIndicator(false))
        setTimeout(() => {
            dispatch(hideAlertNotification())
          }, 3000)
    }
}

export const saveFormThunk = (form: Array<JSONInputType>, formNameExist: boolean): ThunkType => {
    return (dispatch: DispatchType) => {
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

export const removeSavedFormThunk = (key: number, 
    formNameExist: boolean): ThunkType => {
    return (dispatch: DispatchType) => {
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

export const showSaveJsonThunk = (payload: JSONInputType): ThunkType => {
    return (dispatch: DispatchType) => {
        dispatch(showSavedJson(payload))
        dispatch(showAlertNotification('secondary'))
        dispatch(toggleInputsChangeIndicator(false))
        setTimeout(() => {
            dispatch(hideAlertNotification())
          }, 3000)
    }
}
