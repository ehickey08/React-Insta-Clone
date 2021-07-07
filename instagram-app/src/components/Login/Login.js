import React, { Component } from 'react'
import './Login.scss'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components'

const LoginHeaderDiv = styled.div`
    width: 75%;
    margin: 0 auto;
   
`
const InstaLogo = styled.img`
    width: 100%;
`

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      for (var key in values){
          localStorage.setItem(`${key}`, JSON.stringify(values[key]))
      }
      window.location.reload(false);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <>
        <LoginHeaderDiv>
            <InstaLogo src="./assets/1280px-Instagram_logo.svg.png"/>
        </LoginHeaderDiv>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      </>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


export default WrappedNormalLoginForm

