import React from 'react';
import './FormsControls.scss'
import { Field } from 'redux-form';


const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div style={{position: 'relative', width: '100%'}} className={'formControl ' + (hasError ? ' error' : ' ') }>

           {children}

             { hasError && <span style={{position: 'absolute', right: '30px', top: '6px'}}>{error}</span> }
        </div>
    )
}


export const Textarea =(props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
}


export const Input =(props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps}/></FormControl>
}


export const createField = (placeholder, name, validate, component, props = {}, text = "") => (
    <div style={{marginBottom: '15px'}}>
    <Field placeholder={placeholder}
    style={{ width: '100%'}}
    validate={validate}
 name={name} component={component} {...props} className="s"/> <span>{text}</span>
</div>
)