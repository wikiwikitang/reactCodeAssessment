import React from "react";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { closeApptArea, openApptArea } from '../actions/index'
import { btnStyle, isDisplayNone } from '../style/index'
import NewForm from './NewForm'

//condition rendering the New Button or New Appointment Form
//use ES6 style destructing the props
const NewApptArea = ({showNewAppt, closeApptArea, openApptArea}) =>{

  return (
    <div>
      <NewForm isShow={showNewAppt}/>
      <Button
        bsStyle="primary"
        //use spread operator to merge the style object
        style={{...isDisplayNone(!showNewAppt), ...btnStyle}}
        onClick={openApptArea}
      >
        New
      </Button>
    </div>
  )
}

const mapStateToProps = ({appt}) =>{
  return {
    showNewAppt: appt
  }
}

export default connect(mapStateToProps, {closeApptArea, openApptArea})(NewApptArea);
