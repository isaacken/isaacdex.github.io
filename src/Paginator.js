import React,{Component} from 'react';
import './assets/css/App.css';
import './assets/css/Types.css';
import ReactTooltip from 'react-tooltip';

const image_folder = process.env.PUBLIC_URL + '/assets/img';

export default class PokemonItem extends Component {
  render() {
    return (
        <div className='pagination'>
            <img className='nav-btn-loading' src={image_folder+'/arrow_lft.svg'}/>
            <div className='page-range'>
                {this.props.page_init} - {this.props.page_last}
            </div>
            <img className='nav-btn-loading' src={image_folder+'/arrow_rgt.svg'}/>
        </div>
    );
  }
}
