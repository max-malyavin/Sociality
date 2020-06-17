import React from 'react'
import Button from '../Button/Button'
import Block from '../Block/Block'
import './Login.scss'
import {Link, Redirect} from 'react-router-dom';
import { Form, Checkbox } from 'antd';
import {Input} from '../../Utils/Common/FormsControls';
import { UserOutlined, LockOutlined ,MailOutlined} from '@ant-design/icons';
import { login } from '../../ThunkCreator/ThunkCreator';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createField } from '../../Utils/Common/FormsControls';
import { requiredField } from '../../Utils/Validators/validators';

const Login2 = ({login,isAuth,captcha}) => {


    // const onFinish = values => {
    //       const {email, password} = values
    //       login(email, password, true)
    //   };

    const onSubmit = (formData) => {
    
       const {email, password,captcha} = formData
          login(email, password, true, captcha)
  }

      if(isAuth){
        return <Redirect to={'/'}/>
      }
    return (
        <div className='login'>
            <h2>Войти в аккаунт</h2>
            <p>Пожалуйста,войдите в свой аккаунт</p>
            <Block>
            <LoginReduxForm captcha={captcha} onSubmit={onSubmit}/>
          </Block>
        </div>
    )
}
const LoginReduxForm = reduxForm({
  form: 'login'
})(FormLogin)

// const InputAntd = (props)=>{
//   // debuggers
//   return (
//     <Input size='large' {...props}
//     prefix={<LockOutlined className="site-form-item-icon" />}
//     type="password"
//     name={'password'}
//     placeholder="Password"
//   />
//   )
// } 

function FormLogin({handleSubmit, error,captcha}){
  return (
      <form onSubmit={handleSubmit}>
      <div className='login__email'>
        {createField("Почта", "email",[requiredField], Input )}

      </div>
       <div className='login__password'>
         {createField("Пароль", "password",[requiredField], Input, {type: "password"} )}
       </div>
         <div style={{marginBottom: '10px'}} className='login__checkbox'>
                      {/* {createField(null, "rememberMe",[], Input, {type: "checkbox"}, "Запомнить меня" )} */}
           <Field component={'input'} name={'rememberMe'}type={'checkbox'}/>
              <span style={{marginLeft: '10px'}}>
                Запомнить меня
              </span>
        </div>
      <div>    
        {captcha && <img src={captcha}/>}
        {captcha && createField("Анти-бот", "captcha",[requiredField], Input, {type: "text"} )}
        <Button type="primary" size='large' htmlType="submit">
                Войти в аккаунт
          </Button>
      
          {error && <div className="form-summury " style={{marginTop: '25px'}}>
                        {error}

                        
            </div>}
      </div>
  </form>
  )
}


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captchaURL,
})
const mapDispatchToProps = {
  login
}



export default connect(mapStateToProps, mapDispatchToProps)(Login2)



{/* <Form name="normal_login" className="login-form"
                initialValues={{ remember: true,}}
                onFinish={onFinish} >
                    
      <Form.Item   hasFeedback
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },]}>
        <Input size='large' prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },]}>
        <Input size='large'
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
   
         <Form.Item>
             <Button type="primary" size='large' htmlType="submit">
                Войти в аккаунт
            </Button>
         </Form.Item> */}
        //  </Form>            

  {/* <Link className='register-link' to="/register">Зарегистрироваться</Link> */}