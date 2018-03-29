import React,{ Component } from 'react';
import { Button, Input, message } from 'antd';
import { getCookie, setCookie } from '../../assets/js/utils';
import axios from 'axios';
import './login.scss';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }
  componentWillMount() {
    // 获取 cookie 直接登录
    // 不做这个功能了
  }
  handleChange(e) {
    this.setState({
      user: e.target.value
    })
  }
  handleLogin() {
    const { user } = this.state;
    axios.post('accesstoken',{
      accesstoken: user
    })
    .then(res => {
      // console.log(res)
      const { avatar_url, id, loginname } = res
      const userInfo = avatar_url + '|' + id + '|' + loginname;
      setCookie('cnodeuser', userInfo);
      // console.log("写入cookie成功")
      message.success('登录成功',2,() => {
        this.loginIn()
      });
    })
    .catch(error => {
      message.error('登录失败');
    })
  }
  loginIn() {
    this.props.history.push('/topic/all')
  }
  render() {
    const { user } = this.state;
    return(
      <div className="login">
        <div className="logo">
          {/* <img src="" alt=""/> */}
          <div className="logo-img"></div>
          <h1 className="logo-name">cnode</h1>
        </div>
        <div className="login-content">
          <Input onChange={this.handleChange.bind(this)} placeholder="请输入 Access Token" />
          <p>
            <Button type="primary" onClick={this.handleLogin.bind(this)}>登录</Button>
          </p>
          <p>
            <Button type="danger" onClick={this.loginIn.bind(this)}>跳过</Button>
          </p>
        </div>
        <p className="foot">cnode 第三方客户端</p>
      </div>
    )
  }
}
