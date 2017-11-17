import React from 'react';
import {Form, FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap';
import FormErrors from './FormErrors'

class Settings extends React.Component {

constructor (props) {
	super (props);
	this.state = {
	speedlimit: ' ',
	alertemail: ' ',
	textalert: ' ',
	notification: ' ',
	formErrors: {speedlimit: ' ', alertemail: ' ', textalert: ' ', notification: ' '},
	speedlimitValid: false,
	alertemailValid: false,
	textalertValid: false,
	notificationValid: false,
	formValid: false
  };
}

handleUserInput = (e) => {
	const name = e.target.name;
	const value = e.target.value;
	this.setState({[name]: value},
					() => {this.validateField(name, value) });
}

validateField(fieldName, value) {
	let fieldValidationErrors = this.state.formErrors;
	let speedlimitValid = this.state.speedlimitValid;
	let alertemailValid = this.state.alertemailValid;
	let textalertValid = this.state.textalertValid;
	let notificationValid = this.state.notificationValid;

	switch(fieldName) {
	  case 'speedlimit':
	    speedlimitValid = value.match(/^[0-9]+$/);
	    fieldValidationErrors.speedlimit = speedlimitValid ? '' : 'is invalid';
	    break;
	  case 'alertemail':
	  	alertemailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
	  	fieldValidationErrors.alertemail = alertemailValid ? '' : 'is invalid';
	  	break;
	  case 'textalert':
	    textalertValid = value.match(/^(\d{10})|(([\(]?([0-9]{3})[\)]?)?[ \.\-]?([0-9]{3})[ \.\-]([0-9]{4}))$/);
	    fieldValidationErrors.textalert = textalertValid ? '' : 'is invalid';
	    break;
	  case 'notification':
	  	notificationValid = value.match(/Choose One/);
	  	fieldValidationErrors.notification = notificationValid ? 'is invalid' : '';
	  	break;
	    default:
	    break;
	}
	this.setState({formErrors: fieldValidationErrors,
	                  speedlimitValid: speedlimitValid,
	                  alertemailValid: alertemailValid,
	                  textalertValid: textalertValid,
	                  notificationValid: notificationValid}, this.validateForm);
}

validateForm() {
	this.setState({formValid: this.state.speedlimitValid && this.state.alertemailValid && this.state.textalertValid && this.state.notificationValid});
}

errorClass(error) {
	return(error.length === 0 ? ' ' : 'has-error');
}

render () {
	return (
	<form className="settingsForm">
	<h2>Alert Settings</h2>
	<div className="panel panel-default">
	 <FormErrors formErrors={this.state.formErrors} />
    </div>
    <div className={'form-group ${this.errorClass(this.state.formErrors.speedlimit)}'}>
    	<label htmlFor="speedlimit">Speed Limit</label>
    	<input type="text" required className="form-control" name="speedlimit"
    		placeholder="MPH"
    		value={this.state.speedlimit}
    		onChange={this.handleUserInput} />
    </div>
    <div className={'form-group ${this.errorClass(this.state.formErrors.alertemail)}'}>
    	<label htmlFor="alertemail">Alert Email</label>
    	<input type="text" required className="form-control" name="alertemail"
    		placeholder="example@domain.com"
    		value={this.state.alertemail}
    		onChange={this.handleUserInput} />
    </div>
    <div className={'form-group ${this.errorClass(this.state.formErrors.textalert)}'}>
    	<label htmlFor="textalert">Text Alert</label>
    	<input type="text" required className="form-control" name="textalert"
    		placeholder="(xxx)(xxx)-(xxxx)"
    		value={this.state.textalert}
    		onChange={this.handleUserInput} />
    </div>
    <div className={'form-group ${this.errorClass(this.state.formErrors.notifications)}'}>
    	<label htmlFor="notifications">Notification Before Expiration</label>
    	<input type="select" required className="form-control" name="notification"
    		placeholder="Choose One"
    		value={this.state.notification}
    		onChange={this.handleUserInput} />
    </div>
  </form>
   )
 }
}

export default Settings

/*import {PropTypes} from 'react'

const Settings = ({      speedlimit,
                             alertemail,
                             textalert,
                             notification,
                             onSubmission }) => {

    let _speedlimit, _alertemail, _textalert, _notification

    const submit = (e) => {
        e.preventDefault()
        onSubmission({
            speedlimit: _speedlimit.value,
            alertemail: _alertemail.value,
            textalert: _textalert.value,
            notification: _notification.value
        })
        _speedlimit.value = ''
        _alertemail.value = ''
        _textalert.value = ''
        _notification.value = ''

    }

    return (
        <form onSubmit={submit} className="settings-form">

            <label htmlFor="speedlimit">Speed Limit</label>
            <input id="speedlimit"
                   type="text"
                   required
                   defaultValue={speedlimit}
                   ref={input => _speedlimit = input}/>

            <label htmlFor="alertemail">Alert Email</label>
            <input id="alertemail"
                   type="text"
                   required
                   defaultValue={alertemail}
                   ref={input => _alertemail = input}/>

            <div>
                <label htmlFor="textalert">Text Alert</label>
                <input id="textalert"
                       type="text"
                       defaultValue={textalert}
                       ref={input => _textalert = input}/>

            </div>

            <div>
                <label htmlFor="notification">Notification Before Expiration</label>
                <input id="notification"
                       type="select"
                       defaultValue={notification}
                       ref={input => _notification = input}/>

            </div>
            <button>Submit</button>
        </form>
    )
}

Settings.defaultProps = {
    speedlimit: " ",
    alertemail: " ",
    textalert: " ",
    notification: " "
}


Settings.propTypes = {
    speedlimit: PropTypes.number.isRequired,
    alertemail: PropTypes.string.isRequired,
    textalert: PropTypes.number.isRequired,
    notification: PropTypes.string.isRequired
}

export default Settings*/
