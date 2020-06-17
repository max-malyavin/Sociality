import React from 'react'
import {reduxForm, Field} from 'redux-form';

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div>
           <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm =(props)=> {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'}
                name={'login'}
                placeholder={'Login'}/>
            </div>
                    <div>
                    <Field placeholder={'Password'} 
                      name={'password'}
                    component={'input'}/>
                    </div>
                            <div>
                            <Field component={'input'}
                             name={'rememberMe'}
                            type={'checkbox'}/>remember me
                            </div>
            <div>
        <button>login</button>
            </div>
    </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm)


export default Login
