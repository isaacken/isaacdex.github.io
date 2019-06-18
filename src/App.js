import React,{Component} from 'react';
import PokemonItem from './PokemonItem';
import Paginator from './Paginator';
import axios from 'axios';
import './assets/css/App.css';

const image_folder = process.env.PUBLIC_URL + '/assets/img';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pokemon: [],
      loaded: false
    }  
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  pad = (num, size) => {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

  componentWillMount = async () => {
    this.getData();
  }

  getData = async () => {
    this.setState({loaded: false});
    let limit = (this.state.page - 1) * 12;
    let pokemonList = [];
    let pokemon = axios.get('https://pokeapi.co/api/v2/pokemon/?offset='+limit+'&limit=12').then((response) => {
      pokemon = response.data.results;
      pokemon.forEach(async (e) => {
        axios.get(e.url)
        .then((response) => {
          pokemonList.push({
            name: response.data.name,
            number: this.pad(response.data.id,3),
            types: response.data.types
          }); 
        });
      });
      setTimeout(() => {
        do {
          if (pokemonList.length >= 12)
            this.setState({pokemon: pokemonList, loaded: true});
        } while (pokemonList.length < 12);
      },2000);
    });
  }

  nextPage = () => {
    this.setState({page: ++this.state.page}); 
    this.getData();
  }

  prevPage = () => {
    if (this.state.page > 1) {
      this.setState({page: --this.state.page}); 
      this.getData();
    }
  }

  render() {
    if (this.state.loaded) {
      this.state.pokemon.sort((a,b) => a.number - b.number);
      return (
        <div className='pokedex'>
          <div className='header'>
            <h1><img src={image_folder + '/logo.svg'} /></h1>
          </div>
          <div className='pagination'>
            <img className='nav-btn' onClick={this.prevPage} src={image_folder+'/arrow_lft.svg'}/>
            <div className='page-range'>
              {(this.state.page - 1) * 12 + 1} - {(this.state.page - 1) * 12 + 12}
            </div>
            <img className='nav-btn' onClick={this.nextPage} src={image_folder+'/arrow_rgt.svg'}/>
          </div>
          <div className='pokemon-list'>
            {
              this.state.pokemon.map((e,k) => {
                if (e.types[1]) {
                  return (
                    <PokemonItem 
                      pokemon_name={e.name}
                      pokedex_number={e.number}
                      type_1={e.types[1].type.name}
                      type_2={e.types[0].type.name} />
                  );
                } else {
                  return (
                    <PokemonItem 
                      pokemon_name={e.name}
                      pokedex_number={e.number}
                      type_1={e.types[0].type.name} />
                  );
                }
              })
            }
          </div>
          <div className='pagination'>
            <img className='nav-btn' onClick={this.prevPage} src={image_folder+'/arrow_lft.svg'}/>
            <div className='page-range'>
              {(this.state.page - 1) * 12 + 1} - {(this.state.page - 1) * 12 + 12}
            </div>
            <img className='nav-btn' onClick={this.nextPage} src={image_folder+'/arrow_rgt.svg'}/>
          </div>
        </div>
      );
    } else {
      let loading_img = parseInt(Math.random()*4) + 1;
      return (
        <div className='pokedex'>
          <div className='header'>
            <h1><img src={image_folder + '/logo.svg'} /></h1>
          </div>
          <Paginator page_init={(this.state.page - 1) * 12 + 1} page_last={(this.state.page - 1) * 12 + 12} />
          <img className='loading-gif' src={image_folder+'/loading_'+loading_img+'.gif'} />
          <Paginator page_init={(this.state.page - 1) * 12 + 1} page_last={(this.state.page - 1) * 12 + 12} />
        </div>
      );
    } 
  }
}
