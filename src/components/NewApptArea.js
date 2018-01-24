import React from "react";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { closeApptArea, openApptArea } from '../actions/index'
import NewForm from './NewForm'

const NewApptArea = ({showNewAppt, closeApptArea, openApptArea}) =>{
  if(showNewAppt){
    return(
      <NewForm/>
    )
  }
  return (
    <Button bsStyle="primary" onClick={openApptArea}>New</Button>
  )
}

const mapStateToProps = ({appt}) =>{
  return {
    showNewAppt: appt
  }
}

export default connect(mapStateToProps, {closeApptArea, openApptArea})(NewApptArea);
