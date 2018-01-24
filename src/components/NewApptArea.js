import React from "react";
import { connect } from 'react-redux';
import { closeApptArea, openApptArea } from '../actions/index'
import NewForm from './NewForm'

const NewApptArea = ({showNewAppt, closeApptArea, openApptArea}) =>{
  if(showNewAppt){
    return(
      <NewForm/>
    )
  }
  return (
    <button onClick={openApptArea}>New</button>
  )
}

const mapStateToProps = ({appt}) =>{
  return {
    showNewAppt: appt
  }
}

export default connect(mapStateToProps, {closeApptArea, openApptArea})(NewApptArea);
