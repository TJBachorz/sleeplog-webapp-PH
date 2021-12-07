import React from 'react';
import { Field } from 'formik';

const Select = ({
    name,
    onChange,
    options,
    type,
    value
}) => {
    return (
        <Field
            as="select"
            name={name}
            onChange={onChange}
            type={type}
            value={value}
        >
            {options.map((option, index) => {
                return (
                    <option key={index} value={option}>{option}</option>
                );
            })}
        </Field>
    );
}

export default Select;