import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import

const types = ['hospital', 'shopping_mall', 'local_government_office', 'school']

// source: https://codesandbox.io/s/ZVGJQBJMw
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const SearchForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="radius" type="number" component={renderField} label="Radius" />
      <Field name="query" type="text" component={renderField} label="keyword" />

      <Field name="searchType" component="select">
        <option></option>
        <option value="#ff0000">Red</option>
        <option value="#00ff00">Green</option>
        <option value="#0000ff">Blue</option>
      </Field>

      <div>
        <button type="submit" disabled={submitting}>Search</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          reset
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'searchForm', // a unique identifier for this form
})(SearchForm);