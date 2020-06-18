import React from 'react';
import './FormsControls.scss'
import { Field, WrappedFieldProps, WrappedFieldMetaProps } from 'redux-form';
import { FieldValidatorType } from '../Validators/validators';


type FormControlPropsType ={
    meta : WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({ meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div style={{position: 'relative', width: '100%'}} className={'formControl ' + (hasError ? ' error' : ' ') }>

           {children}

             { hasError && <span style={{position: 'absolute', right: '30px', top: '6px'}}>{error}</span> }
        </div>
    )
}




export const Textarea: React.FC<WrappedFieldProps> =(props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
}


export const Input: React.FC<WrappedFieldProps> =(props) => {
    // const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps}/></FormControl>
}


export function createField<FormKeysType extends string> (placeholder:string| undefined, name:FormKeysType, validate: Array<FieldValidatorType>,
     component: string | React.FC<WrappedFieldProps>, props = {}, text = "") {
    return <div style={{marginBottom: '15px'}}>
    <Field placeholder={placeholder}
    style={{ width: '100%'}}
    validate={validate}
 name={name} component={component} {...props} className="s"/> <span>{text}</span>
</div>
}