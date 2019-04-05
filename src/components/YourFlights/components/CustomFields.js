import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const CustomInput = props => {
  const { meta } = props;
  return (
    <div>
      <label>{props.label}</label>
      <input {...props.input} type={props.type} />
      {meta.error &&
        meta.touched &&
        !meta.active && (
          <div className={'err-msg'}>{meta.error}</div>
        )}
    </div>
  );
};

export const CustomSelect = props => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input}>
        <option value="cheap">cheap</option>
        <option value="business">business</option>
      </select>
    </div>
  );
};

export const CustomDatePicker = props => {
  const { label, input } = props;
  return (
    <div>
      <label>{label}</label>
      <DatePicker
        selected={(input.value) ? input.value :new Date()}
        startDate={new Date()}
        onChange={(dateValue) => {
          input.onChange(dateValue);
        }}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
        timeCaption="time"
      />
    </div>
  );
};