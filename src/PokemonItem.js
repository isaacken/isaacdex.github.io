import React,{Component} from 'react';
import './assets/css/App.css';
import './assets/css/Types.css';
import ReactTooltip from 'react-tooltip';

const image_folder = process.env.PUBLIC_URL + '/assets/img';

export default class PokemonItem extends Component {
  renderType2 = () => {
    if (this.props.type_2)
      return (
        <a href={'https://www.pokemon.com/br/pokedex/?type='+this.props.type_2} target='_blank'>
          <img className='pokemon-type pokemon-type-2' data-tip={this.props.type_2} src={image_folder+'/types/'+this.props.type_2+'.svg'} />
        </a>
      );
  }

  render() {
    return (
        <div className='pokemon-item'>
            <ReactTooltip />
            <figure className='pokemon-image-container'>
                <img src={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+this.props.pokedex_number+'.png'} />
            </figure>
            <a href={'https://www.pokemon.com/br/pokedex/'+this.props.pokedex_number} target='_blank' className={this.props.type_1 + '-title pokemon-item-title'}>
                <h2>{this.props.pokemon_name}</h2>
                <span className='pokemon-id'>#{this.props.pokedex_number}</span>
            </a>
            <a href={'https://www.pokemon.com/br/pokedex/?type='+this.props.type_1}>
              <img className='pokemon-type pokemon-type-1' target='_blank' data-tip={this.props.type_1} src={image_folder+'/types/'+this.props.type_1+'.svg'} />
            </a>
            {this.renderType2()}
        </div>
    );
  }
}
