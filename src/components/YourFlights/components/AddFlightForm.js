import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {CustomInput, CustomSelect, CustomDatePicker} from './CustomFields'
import {required} from '../validation';

class AddFlightForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={'flight-form'}>
        <div className={'flight-field-group'}>
          <Field
              name="flightType"
              label="Flight Type"
              component={CustomSelect}
          />
          <Field
              name="departure"
              label="Departure"
              component={CustomInput}
              type="text"
              validate={[required]}
          />
          <Field
              name="arrival"
              label="Arrival"
              component={CustomInput}
              type="text"
              validate={[required]}
          />
        </div>
        <div className={'flight-field-group'}>
          <Field
              name="departureTime"
              label="Departure Time"
              component={CustomDatePicker}
          />
          <Field
              name="arrivalTime"
              label="Arrival Time"
              component={CustomDatePicker}
          />
        </div>
        <div>
          <button type="submit">Add Flight</button>
        </div>
      </form>
    );
  }
}

AddFlightForm = reduxForm({form: 'flightForm'})(AddFlightForm)

export default AddFlightForm;
