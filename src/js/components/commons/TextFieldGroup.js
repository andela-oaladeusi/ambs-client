import React from 'react';

const TextFieldGroup = ({ id, field, value, label, type, onChange, placeholder }) => {
	return (
    <div className="input-field col s12 center">
      <input
        placeholder={placeholder}
        id={id}
        type={type}
        name={field}
        className="validate"
        onChange={onChange}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
	);
}

TextFieldGroup.defaultProps = {
	type: 'text'
}

export default TextFieldGroup;
