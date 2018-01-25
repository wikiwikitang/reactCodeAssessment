import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addAppt, closeApptArea } from '../actions/index'
import { Button, Panel, FormGroup, ControlLabel } from 'react-bootstrap';
import { btnStyleInForm, errorStyle, isDisplayNone } from '../style/index'

//sync validate the input data
const validate = (values)=>{
  const errors = {};

  //the appointment date should be late than today
  if(!values.date){
    errors.date = "Required"
  }else if(new Date(values.date) < new Date()){
    errors.date = "Please choose a valid appointment date!"
  }

  if(!values.time){
    errors.time = "Required"
  }

  //if the description should not be empty or blank and only tab or space
  if(!values.description || values.description.trim().length === 0){
    errors.description = "Required"
  }

  return errors;
}

const renderField = ({ input, label, type, meta: { touched, error}}) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <div>
      <input {...input} placeholder={label} type={type}/>
      <div style={errorStyle}>
        {touched && (error && <span>{error}</span>)}
      </div>
    </div>
  </FormGroup>
)

class newForm extends Component{

  //submit the data to backend and reset the form
  submitData = (values) => {
    this.props.addAppt(values);
    this.props.reset('newForm');
  }

  render(){
    const { closeApptArea, isShow, handleSubmit } = this.props
    return(
      <Panel style={isDisplayNone(isShow)}>
        <Panel.Heading>Add A New Appointment</Panel.Heading>
        <Panel.Body>
          <form onSubmit={handleSubmit(this.submitData)}>
            <FormGroup>
              <Button bsStyle="primary" type="submit">Add</Button>
              <Button bsStyle="danger" style={btnStyleInForm} onClick={closeApptArea} >Cancel</Button>
            </FormGroup>
            <Field name="date" type="date" component={renderField} label="DATE"/>
            <Field name="time" type="time" component={renderField} label="TIME"/>
            <Field name="description" type="text" component={renderField} label="DESC"/>
          </form>
        </Panel.Body>
      </Panel>
    )
  }
}

newForm = connect(null, {addAppt, closeApptArea})(newForm);

export default reduxForm({
  form: 'newForm',
  validate
})(newForm)
