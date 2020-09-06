import React, { Component } from 'react';
import Config from './components/config/config';
import Results from './components/results/results';
import { connect } from 'react-redux';
import { editModeSwitch, toggleSaveHint, toggleResetHint, toggleGuide } from './redux/actions/actions';

import {
  saveFormThunk, resetJsonInputsThunk, removeSavedFormThunk,
  onInputsChangedThunk, changeValueThunk, changeNumberThunk,
  showSaveJsonThunk
} from './redux/thunks';

import Guide from './components/guide';
import Alert from './components/alert';
import { JSONInputType } from './redux/actions/types';
import { AppStateType } from './redux/reducer';

import './App.css'

type MapStatePropsType = {
  jsonInput: Array<JSONInputType>, 
  savedForms: Array<JSONInputType>, 
  isAlertShowed: boolean,
  alertStatus: string,
  editMode: boolean, 
  _mainForm: boolean,
  savingLocked: boolean,
  saveHintShow: boolean, 
  resetHintShow: boolean, 
  inputsChanged: boolean,
  guideOpened: boolean
}
type MapDispatchPropsType = {
  onInputsChangedThunk: (payload: string, 
    jsonInput: Array<JSONInputType>) => void, 
  changeNumberThunk: (value: number, 
    name: string | null, sum: number) => void, 
  changeValueThunk: (value: string | null, 
    name: string | null, alue: string | null) => void,
  editModeSwitch: (status: boolean) => void, 
  resetJsonInputsThunk: () => void, 
  saveFormThunk: (form: Array<JSONInputType>, 
    formNameExist: boolean) => void,
  removeSavedFormThunk: (key: number, 
    formNameExist: boolean) => void,  
  showSaveJsonThunk: (payload: JSONInputType) => void,
  toggleSaveHint: (status: boolean) => void,
  toggleResetHint: (status: boolean) => void,
  toggleGuide: () => void 
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class App extends Component<PropsType> {
  render() {
    const { jsonInput, savedForms, editMode, _mainForm,
      saveHintShow, resetHintShow, savingLocked, isAlertShowed,
      onInputsChangedThunk, changeNumberThunk, changeValueThunk,
      editModeSwitch, resetJsonInputsThunk, saveFormThunk,
      removeSavedFormThunk, toggleSaveHint, toggleResetHint,
      inputsChanged, showSaveJsonThunk, guideOpened, toggleGuide,
      alertStatus } = this.props
    return (
      <div className="container">
        {isAlertShowed && <Alert status = {alertStatus} />}
        <h3 className="row justify-content-center pt-3">
          JSON To Form Builder
        </h3>
        <div className="row p-3 justify-content-center">
          <div className="main_card row col-10">
            <div>
              <i className={`fa ${guideOpened ? "fa-times-circle opened" : "fa-question-circle"} guide_toggle `}
                onClick={() => toggleGuide()} />
            </div>
            <div className="col-6 pt-3 border-right">
              <h5 className="text-center">
                JSON inputs:
              </h5>
              <Config inputs={jsonInput} changeHandler={onInputsChangedThunk}
                editMode={editMode} editModeSwitch={editModeSwitch}
                resetJsonInputs={resetJsonInputsThunk} savingLocked={savingLocked}
                resetHintShow={resetHintShow} toggleResetHint={toggleResetHint}
              />
            </div>
            <div className="grid-divider"><hr /></div>
            <div><Guide guideOpened={guideOpened} /></div>
            <div className="col-6 pt-3">
              <h5 className="text-center">
                Form result:
              </h5>
              <Results inputs={jsonInput} changeHandler={onInputsChangedThunk}
                changeNumber={changeNumberThunk} editMode={editMode}
                resetJsonInputs={resetJsonInputsThunk} changeValue={changeValueThunk}
                mainForm={_mainForm} saveForm={saveFormThunk}
                savingLocked={savingLocked} saveHintShow={saveHintShow}
                toggleSaveHint={toggleSaveHint} savedForms={savedForms}
                showSavedJson={showSaveJsonThunk}
              />
            </div>
          </div>
        </div>
        {/* Render saved Forms */}
        {savedForms.length > 0 &&
          <div>
            <h3 className="row justify-content-center">Saved Forms:</h3>
            <div className="row p-3">
              <div className="card-columns">
                <Results inputs={jsonInput} savedForms={savedForms}
                  removeSavedForm={removeSavedFormThunk} inputsChanged={inputsChanged}
                  showSavedJson={showSaveJsonThunk}
                />
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (
  { jsonInput, savedForms, editMode, _mainForm, saveHintShow, resetHintShow, savingLocked, inputsChanged, guideOpened, isAlertShowed, alertStatus }: AppStateType)
  : MapStatePropsType => {
    return {
      jsonInput, savedForms, editMode, _mainForm, saveHintShow,
      resetHintShow, savingLocked, inputsChanged, guideOpened,
      isAlertShowed, alertStatus
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, unknown, AppStateType>(mapStateToProps,
  {
    onInputsChangedThunk, changeNumberThunk, changeValueThunk, editModeSwitch,
    resetJsonInputsThunk, saveFormThunk, removeSavedFormThunk,
    toggleSaveHint, toggleResetHint, showSaveJsonThunk, toggleGuide
  }
)(App)