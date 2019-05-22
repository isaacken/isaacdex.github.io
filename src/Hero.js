import React,{Component} from 'react';
import Button from './Button.js';
import './assets/css/hero.css';
import './assets/css/common.css';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1>Music for everyone.</h1>
        <h2>Millions of songs. No credit card needed.</h2>
        <div>
          <Button type='primary'>GET SPOTIFY FOR FREE</Button>
        </div>
      </div>
    );
  }
}
