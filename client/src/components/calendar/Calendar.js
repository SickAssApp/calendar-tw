import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import CalendarField from './CalendarField'
import formFields from './formFields';

class Calendar extends Component {
  rederCalendarForm(){
    return _.map(formFields, ({label, name})=> {
      return (
        <Field
          key={name}
          component={CalendarField}
          type="text"
          label={label}
          name={name}
        />
      )
    })
  }

  render() {
    return (
      <div>
        Calendar setup
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.rederCalendarForm()}          
          <button type="submit" className="teal btn-flat right white-text">
            Submit
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'calendarForm'
})(Calendar);
