import React from 'react'
import './App.css';

export const salary = 80000
export const oneMonthTakeHome = Math.round(salary * .65 / 12)
export const twoMonthTakeHome = Math.round(salary * .65 / 6)
export const threeMonthTakeHome = Math.round(salary * .65 / 4)

const App = () => {
  const handleSubmit = () => {
    console.warn('hello')
  }

  const initialState = { oneTimeDeposit: twoMonthTakeHome, isValid: true }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'oneMonthTakeHome': {
        return { ...state, oneTimeDeposit: oneMonthTakeHome }
      }
      case 'twoMonthTakeHome': {
        return { ...state, oneTimeDeposit: twoMonthTakeHome }
      }
      case 'threeMonthTakeHome': {
        return { ...state, oneTimeDeposit: threeMonthTakeHome }
      }
      case 'customTakeHome': {
        return { 
          ...state,
          oneTimeDeposit: action.payload,
          isValid: Number.isInteger(parseInt(action.payload)) && (parseInt(action.payload) === 0 || parseInt(action.payload) > 0)
        }
      }
      default: {
        return initialState
      }
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="PageHeader">Would you like to set a one-time deposit?</h1>
      </header>
        <form>
          <label className="OneTimeDepositLabel" htmlFor="oneTimeDeposit">One time deposit amount</label>
          <input 
            id="oneTimeDeposit"
            name="oneTimeDeposit" 
            className="OneTimeDepositInputField"
            type="number" 
            value={state.oneTimeDeposit} 
            onChange={event => dispatch({ type: 'customTakeHome', payload: event.target.value })}
          />
        </form>
        <ul className="TakeHomePayButtons">
          <li>
            <button 
              data-testid="oneMonthTakeHomeButton" 
              onClick={() => dispatch({ type: 'oneMonthTakeHome' })}>
                1 month take-home pay
            </button>
          </li>
          <li>
            <button 
              data-testid="twoMonthTakeHomeButton"
              onClick={() => dispatch({ type: 'twoMonthTakeHome' })}>
              2 months take-home pay
            </button>
          </li>
          <li>
            <button 
              data-testid="threeMonthTakeHomeButton"
              onClick={() => dispatch({ type: 'threeMonthTakeHome' })}>
              3 months take-home pay
            </button>
          </li>
        </ul>
        {!state.isValid && 
          <p 
            data-testid="errorMessage" 
            className="ErrorMessage">
              Oops, you must enter a valid dollar amount or $0
          </p>
        }
        <button disabled={!state.isValid} className="SubmitButton" onClick={handleSubmit}>
          Submit
        </button>
    </div>
  );
}

export default App;
