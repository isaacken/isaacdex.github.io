import React,{Component} from 'react';
import PokemonItem from './PokemonItem';
import './assets/css/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="pokedex">
        <div className='pokemon-list'>
          <PokemonItem></PokemonItem>
        </div>
      </div>
    );
  }
}
