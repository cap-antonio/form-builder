import React, { Component } from 'react';
import Config from './components/config/config';
import Results from './components/results/results';
import { connect } from 'react-redux';
import {
  editModeSwitch,
  saveLocker, toggleSaveHint,
  toggleResetHint,
  toggleGuide,
} from './redux/actions/actions';
import {
  saveFormThunk, resetJsonInputsThunk, removeSavedFormThunk,
  onInputsChangedThunk, changeValueThunk, changeNumberThunk,
  showSaveJsonThunk
} from './redux/thunks';

import './App.css'
import Guide from './components/guide';
import Alert from './components/alert';

class App extends Component {
  render() {
    const { jsonInput, savedForms, editMode, mainForm,
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
                mainForm={mainForm} saveForm={saveFormThunk}
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

const mapStateToProps = ({ jsonInput, savedForms, editMode, mainForm, saveHintShow, resetHintShow, savingLocked, inputsChanged, guideOpened, isAlertShowed, alertStatus }) => {
  return {
    jsonInput, savedForms, editMode, mainForm, saveHintShow,
    resetHintShow, savingLocked, inputsChanged, guideOpened,
    isAlertShowed, alertStatus
  }
}

export default connect(mapStateToProps,
  {
    onInputsChangedThunk, changeNumberThunk, changeValueThunk, editModeSwitch,
    resetJsonInputsThunk, saveFormThunk, saveLocker, removeSavedFormThunk,
    toggleSaveHint, toggleResetHint, showSaveJsonThunk, toggleGuide
  }
)(App)