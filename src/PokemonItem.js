import React,{Component} from 'react';
import './assets/css/App.css';

var image_folder = process.env.PUBLIC_URL + '/assets/img';

export default class PokemonItem extends Component {
  render() {
    return (
        <div className='pokemon-item'>
            <div className='pokemon-item-title'>
                <h2>Pokémon</h2>
                <span className='pokemon-id'>#000</span>
            </div>
        </div>
    );
  }
}
