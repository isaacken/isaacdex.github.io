import React,{Component} from 'react';
import './assets/css/common.css';
import './assets/css/footer.css';
import logo from './assets/img/logo.svg';
import facebook from './assets/img/fb-logo.png';
import twitter from './assets/img/twitter-logo.png';
import instagram from './assets/img/instagram-logo.png';

export default class Header extends Component {
  render() {
    return (
      <div id='footer' className='footer'>
        <img src={logo} className='logo col-1'/>
        <div className='col col-1'>
            <ul className='footer-list'>
                <li className='footer-item footer-title'>Company</li>
                <li className='footer-item'><a href="#">About</a></li>
                <li className='footer-item'><a href="#">Jobs</a></li>
                <li className='footer-item'><a href="#">For the Record</a></li>
            </ul>
        </div>
        <div className='col col-1'>
            <ul className='footer-list'>
                <li className='footer-item footer-title'>Communities</li>
                <li className='footer-item'><a href="#">For Artists</a></li>
                <li className='footer-item'><a href="#">Developers</a></li>
                <li className='footer-item'><a href="#">Brands</a></li>
                <li className='footer-item'><a href="#">Investors</a></li>
                <li className='footer-item'><a href="#">Vendors</a></li>
            </ul>
        </div>
        <div className='col col-1'>
            <ul className='footer-list'>
                <li className='footer-item footer-title'>Useful links</li>
                <li className='footer-item'><a href="#">Help</a></li>
                <li className='footer-item'><a href="#">Web Player</a></li>
            </ul>
        </div>
        <div id='socials' className='col col-2'>
            <img className='social-icon' src={facebook} />
            <img className='social-icon' src={twitter} />
            <img className='social-icon' src={instagram} />
        </div>
      </div>
    );
  }
}
