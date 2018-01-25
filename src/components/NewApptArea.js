import React from "react";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { closeApptArea, openApptArea } from '../actions/index'
import { btnStyle } from '../style/index'
import NewForm from './NewForm'

//condition rendering the New Button or New Appointment Form
const NewApptArea = ({showNewAppt, closeApptArea, openApptArea}) =>{
  if(showNewAppt){
    return(
      <NewForm/>
    )
  }
  return (
    <Button bsStyle="primary" style={btnStyle} onClick={openApptArea}>New</Button>
  )
}

const mapStateToProps = ({appt}) =>{
  return {
    showNewAppt: appt
  }
}

export default connect(mapStateToProps, {closeApptArea, openApptArea})(NewApptArea);
