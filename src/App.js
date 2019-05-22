import React,{Component} from 'react';
import Header from './Header.js';
import Hero from './Hero.js';
import Footer from './Footer.js';
import './assets/css/App.css';
import './assets/css/common.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Hero></Hero>
        <Footer></Footer>
      </div>
    );
  }
}
