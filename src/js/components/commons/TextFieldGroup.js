import React from 'react';

const TextFieldGroup = ({ id, field, error, value, label, type, onChange, placeholder, icon }) => {
	return (
    <div className="input-field col s6 center">
      <i className="material-icons prefix">{icon}</i>
      <input
        placeholder={placeholder}
        id={id}
        type={type}
        name={field}
        className="validate"
        required="true"
        aria-required="true"
        onChange={onChange}
        value={value}
      />
      <label htmlFor={id} data-error={error}>{label}</label>
    </div>
	);
}

TextFieldGroup.defaultProps = {
	type: 'text'
}

export default TextFieldGroup;
