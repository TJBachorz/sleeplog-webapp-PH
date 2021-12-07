import React from 'react';
import { Field } from 'formik';

const Select = ({ name, options, type }) => {

    return (
        <Field as="select" name={name} type={type}>
            {options.map((option, index) => {
                return (
                    <option key={index} value={option}>{option}</option>
                );
            })}
        </Field>
    );
}

export default Select;