import React,{Component} from 'react';
import './assets/css/header.css';
import './assets/css/common.css';
import logo from './assets/img/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <nav className="header">
        <img src={logo} className="logo"/>
        <ul className="menu">
          <li className="menu-item"><a href="#">Premium</a></li>
          <li className="menu-item"><a href="#">Help</a></li>
          <li className="menu-item"><a href="#">Download</a></li>
          <li role="separator" class="divider"></li>
          <li className="menu-item grey-menu"><a href="#">Sign up</a></li>
          <li className="menu-item grey-menu"><a href="#">Log In</a></li>
        </ul>
      </nav>
    );
  }
}
