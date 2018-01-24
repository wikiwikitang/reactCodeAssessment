import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import { addAppt, closeApptArea } from '../actions/index'

const validate = (values)=>{
  const errors = {}
  if(!values.date){
    errors.date = "Required"
  }else if(new Date(values.date) < new Date()){
    errors.date = "Please choose a valid appointment date!"
  }

  if(!values.time){
    errors.time = "Required"
  }

  if(!values.description || values.description.trim().length === 0){
    errors.description = "Required"
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      <div style={{ marginBottom: '20px' }}>
        {touched && (error && <span>{error}</span>)}
      </div>
    </div>
  </div>
)

const Btnstyle = {
  marginLeft: '10px'
}

class newForm extends Component{
  submitData = (values) => {
    this.props.addAppt(values);
    this.props.reset('newForm');
  }

  render(){
    const { closeApptArea, handleSubmit } = this.props
    return(
      <form onSubmit={handleSubmit(this.submitData)}>
        <Button type="submit">Add</Button>
        <Button onClick={closeApptArea} style={Btnstyle}>Cancel</Button>
        <Field name="date" type="date" component={renderField} label="DATE"/>
        <Field name="time" type="time" component={renderField} label="TIME"/>
        <Field name="description" type="text" component={renderField} label="DESC"/>
      </form>
    )
  }
}

newForm = connect(null, {addAppt, closeApptArea})(newForm);

export default reduxForm({
  form: 'newForm',
  validate
})(newForm)
