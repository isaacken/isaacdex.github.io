import React,{Component} from 'react';
import './assets/css/hero.css';

export default class Hero extends Component {
  render() {
    return (
      <button className={"btn btn-" + this.props.type}>
          {this.props.children}
      </button>
    );
  }
}
