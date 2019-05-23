import React,{Component} from 'react';
import PokemonItem from './PokemonItem';
import './assets/css/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="pokedex">
        <div className='pokemon-list'>
          <PokemonItem 
            pokemon_name='Bulbasaur'
            pokedex_number='1'
            type_1='grass'
            type_2='poison' />
        </div>
      </div>
    );
  }
}
