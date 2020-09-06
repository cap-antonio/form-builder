import { ON_INPUTS_CHANGE, CHANGE_NUMBER, CHANGE_VALUE, EDIT_MODE_SWITCH, 
    SAVE_FORM, RESET_JSON_INPUTS, SAVE_LOCKER, REMOVE_SAVED_FORM, 
    TOGGLE_SAVE_HINT, TOGGLE_RESET_HINT, SHOW_SAVED_JSON, 
    TOGGEL_INPUTS_CHANGE_INDICATOR, TOGGLE_GUIDE_WINDOW, SHOW_NOTIFICATION, 
    HIDE_NOTIFICATION, JSONInputType, AllActionTypes } from "./actions/types"

const initialState = {
    jsonInput: [
        {
            formName: 'Hello Veeam',
            fields: [
                {
                    label: 'name',
                    type: 'textfield',
                    value: "Anton",
                },
                {
                    label: 'made',
                    type: 'textarea',
                    value: "The form builder",
                },
                {
                    label: 'spent hours',
                    type: 'numberfield',
                    value: 16,
                },
                {
                    label: 'Pick date',
                    type: 'date',
                    value: '2020-08-31',
                },
                {
                    label: `Call to say 'Good work!'`,
                    type: 'checkbox',
                    value: null,
                },
                {
                    label: "Options to choose",
                    type: 'radio',
                    value: [
                        'Be',
                        'Not To Be'
                    ],
                },
            ],
            buttons: [
                {
                    label: 'Hire',
                    color: 'green'
                },
                {
                    label: 'Sorry-mail',
                    color: 'yellow'
                },
            ]
        }
    ] as Array<JSONInputType>,
    savedForms: [
        {
            formName: 'Sign in page',
            fields: [
                {
                    label: 'name',
                    type: 'textfield',
                    value: " ",
                },
                {
                    label: 'surname',
                    type: 'textfield',
                    value: " ",
                },
                {
                    label: 'remember me',
                    type: 'checkbox',
                    value: null,
                },
            ],
            buttons: [
                {
                    label: 'Sign in',
                    color: 'blue'
                },
                {
                    label: 'Sign up',
                    color: 'white'
                },
            ]
        },
        {
            formName: 'Questionnaire',
            fields: [
                {
                    label: 'Today is',
                    type: 'radio',
                    value: [
                        'Monday',
                        'Day',
                        "Monkey"
                    ],
                },
                {
                    label: '2020 is',
                    type: 'radio',
                    value: [
                        'amazing year',
                        'the End',
                        "next please..."
                    ],
                },
                {
                    label: 'Apply form',
                    type: 'checkbox',
                    value: null,
                },
            ],
            buttons: [
                {
                    label: 'Check answers',
                    color: 'blue'
                },

            ]
        }
    ] as Array<JSONInputType>,
    isAlertShowed: false as boolean,
    alertStatus: '' as string,
    editMode: false as boolean,
    _mainForm: true as boolean,
    savingLocked: false as boolean,
    saveHintShow: false as boolean,
    resetHintShow: false as boolean,
    inputsChanged: true as boolean,
    guideOpened: false as boolean
}

export type StateType = typeof initialState

const reducer = (state = initialState, { type, payload }: AllActionTypes): StateType => {
    switch (type) {
        // Handle JSON inputs changes
        case ON_INPUTS_CHANGE:
            return {
                ...state,
                jsonInput: [payload],
            }
        // Increment and Decrement for the number type of field
        case CHANGE_NUMBER:
            return {
                ...state,
                jsonInput: [{
                    ...state.jsonInput[0],
                    fields: state.jsonInput[0].fields.map(
                        f => (f.value === payload.value && f.label === payload.name
                            ? Object.assign(f, { value: payload.value + payload.sum })
                            : f)
                    )
                }]
            }
        // Changing of VALUE attribute of field
        case CHANGE_VALUE:
            return {
                ...state,
                jsonInput: [{
                    ...state.jsonInput[0],
                    fields: state.jsonInput[0].fields.map(
                        f => (f.value === payload.value && f.label === payload.name
                            ? Object.assign(f, { value: payload.newValue })
                            : f)
                    )
                }]
            }
        // Understanding if JSON inputs is being edited  
        case EDIT_MODE_SWITCH:
            return {
                ...state,
                editMode: payload
            }
        // Reset btn to render JSON template
        case RESET_JSON_INPUTS:
            return {
                ...state,
                jsonInput: [
                    {
                        formName: 'Template',
                        fields: [
                            {
                                label: 'Good start',
                                type: 'text',
                                value: 'to change a form name left',
                            },
                            {
                                label: 'When',
                                type: 'date',
                                value: "1999-03-31",
                            },
                            {
                                label: `Input window `,
                                type: 'textarea',
                                value: 'is vertically resizable. Drag the bottom right corner. ',
                            },
                            {
                                label: "Please check the syntax",
                                type: 'radio',
                                value: [
                                    'with Help button',
                                    'or edit left template JSON'
                                ],
                            },
                        ],
                        buttons: [
                            {
                                label: 'Go on!',
                                color: 'blue'
                            }
                        ]
                    }
                ]
            }
        // Save current form to savedForms
        case SAVE_FORM:
            return {
                ...state,
                savedForms: [
                    ...state.savedForms,
                    payload[0]
                ]
            }
        // A preventer to duplicating of saved forms
        case SAVE_LOCKER:
            return {
                ...state,
                savingLocked: payload
            }
        // Remove choosen saved forms
        case REMOVE_SAVED_FORM:
            let updatedSavedForms = [...state.savedForms]
            updatedSavedForms.splice(payload, 1)
            return {
                ...state,
                savedForms: updatedSavedForms
            }
        // Show the save button popover 
        case TOGGLE_SAVE_HINT: 
            return {
                ...state,
                saveHintShow: payload
            }
        // Show the reset button popover
        case TOGGLE_RESET_HINT: 
            return {
                ...state,
                resetHintShow: payload
            }
        // Set a choosen JSON as main to view and edit
        case SHOW_SAVED_JSON:
            return {
                ...state,
                jsonInput: [payload]
            }
        // Indicator to watch if inputs changed
        case TOGGEL_INPUTS_CHANGE_INDICATOR:
            return {
                ...state,
                inputsChanged: payload
            }
        // Toggle guide component
        case TOGGLE_GUIDE_WINDOW:
            return {
                ...state,
                guideOpened: !state.guideOpened
            }
        // Show alert with status of action
        case SHOW_NOTIFICATION:
            return {
                ...state,
                isAlertShowed: true,
                alertStatus: payload
            }
        case HIDE_NOTIFICATION:
            return {
                ...state,
                isAlertShowed: false
            }
        default:
            return state
    }
}

export type ReducerType = typeof reducer
export type AppStateType = ReturnType<ReducerType>

export default reducer 