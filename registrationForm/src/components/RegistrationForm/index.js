// Write your JS code here

import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    isFormSubmitted: false,
  }

  onBlurLastName = () => {
    const validateLastName = this.validateLastName()
    this.setState({lastNameError: !validateLastName})
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target

    this.setState({lastName: value})
  }

  onBlurFirstName = () => {
    const validateFirstName = this.validateFirstName()
    this.setState({firstNameError: !validateFirstName})
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target

    this.setState({firstName: value})
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  renderLastNameField = () => {
    const {lastName, lastNameError} = this.state
    const className = lastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={className}
          placeholder="Last name"
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  renderFirstNameField = () => {
    const {firstName, firstNameError} = this.state
    const className = firstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={className}
          placeholder="First name"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  onSubmit = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        firstNameError: !isValidFirstName,
        lastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistration = () => {
    const {firstNameError, lastNameError} = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmit}>
        {this.renderFirstNameField()}
        {firstNameError && <p className="error-message">Required</p>}
        {this.renderLastNameField()}
        {lastNameError && <p className="error-message">Required</p>}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Registration</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistration()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
