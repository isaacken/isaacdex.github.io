import React,{Component} from 'react';
import './assets/css/App.css';

var image_folder = process.env.PUBLIC_URL + '/assets/img';

export default class PokemonItem extends Component {
  render() {
    return (
        <div className='pokemon-item'>
            <div className='pokemon-item-title'>
                <h2>{this.props.pokemon_name}</h2>
                <span className='pokemon-id'>#{this.props.pokedex_number}</span>
            </div>
            <figure className='pokemon-image-container'>
                <img src={'https://pokeres.bastionbot.org/images/pokemon/'+this.props.pokedex_number+'.png'} />
            </figure>
            <img className='pokemon-type-1' src={image_folder+'/types/'+this.props.type_1+'.svg'} />
            <img className='pokemon-type-2' src={image_folder+'/types/'+this.props.type_2+'.svg'} />
        </div>
    );
  }
}
