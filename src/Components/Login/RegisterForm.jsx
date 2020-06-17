import React from 'react'
import Button from '../Button/Button'
import './Login.scss'
import {Link} from 'react-router-dom';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined  } from '@ant-design/icons';
import Block from '../Block/Block';
// import { withFormik } from 'formik';


const RegisterForm = (props) => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
    return (
        <div className='login'>
               <h2>Регистрация</h2>
            <p>Для входа в чат,вам нужно зарегистрироваться</p>
                <Block>
             <Form name="normal_login"  className="login-form"
            initialValues={{ remember: true, }} onFinish={onFinish} >

      <Form.Item  hasFeedback name="Email"  rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },]}>
        <Input size='large' 
        prefix={<MailOutlined  className="site-form-item-icon" />} 
        placeholder="E-mail" type="email"/>
      </Form.Item>

      <Form.Item name="username"  rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },]}>
        <Input size='large'
          prefix={<UserOutlined  className="site-form-item-icon" />}
          type="text"
          placeholder="Ваше имя" />
      </Form.Item>

      <Form.Item  name="password"  rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },]}>
        <Input size='large'
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"/>
      </Form.Item>

      <Form.Item name="password-repeat"  rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },]}>
        <Input size='large'
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Повторите пароль"
        />
      </Form.Item>
   
      <Form.Item>
        <Button  htmlType="submit" type="primary" size='large'>
           Зарегистрироваться
        </Button>
      </Form.Item>

        <Link className='register-link' to="/login">Войти в аккаунт</Link>
    </Form>
    </Block>
        </div>
    )
}

export default RegisterForm
// export default withFormik({
//   mapPropsToValues: () => ({
//     email: 'YA TYT',
//     password: ''
// }),
//   validate: values => {
//     let errors = {};
//     if(!values.email){
//       errors.email = "Required"
//     } else if(!values.email){
//       errors.email = "Invalid email"
//     }
//     // validateForm({isAuth: false, values, errors});
  
    
//     return errors;
//   },

//   handleSubmit: (values, { setSubmitting }) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 1000);
//   },

//   displayName: 'RegisterForm', 
// // })(RegisterForm);
// const { values, touched, errors,
//   isSubmitting,handleChange,handleBlur,
//   handleSubmit,handleReset,dirty} = props;

  // const onFinish = values => {
  //     console.log('Received values of form: ', values);
  //   }; 
  // onFinish={onFinish}
  

// const validate = (key, touched, errors ) => {
//   if(touched[key] ) {
//     if(errors[key]){
//         return 'error'
//     } else {
//         return 'success';
//     }
//   }else {
//       return '';
//   }

