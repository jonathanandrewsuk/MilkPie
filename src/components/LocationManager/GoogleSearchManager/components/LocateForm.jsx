import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const LocateForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="lat" type="number" component={renderField} label="Latitude" />
      <Field name="lng" type="number" component={renderField} label="Longitude" />
      <div>
        <button type="submit" disabled={submitting}>Locate</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'locateForm', // a unique identifier for this form
})(LocateForm);