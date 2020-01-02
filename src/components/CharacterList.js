import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getCharactersQuery} from "../queries/queries";
import CharacterDetails from './CharacterDetails';

class CharacterList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, id) {
        e.preventDefault();
        this.setState({selected: id});
    }

    displayCharacters() {
        let data = this.props.data;
        if (data.loading) {
            return(
                <div>Loading characters...</div>
            );
        } 
        else {
            return data.characters.results.map(character => {
                return(
                    <li 
                        key={character.id} 
                        onClick={(e) => this.handleClick(e, character.id)}>
                            {character.name}
                    </li>
                )
            })
        }
    }

    render() {
        return (
            <div>
              <ul id="character-list">
                  {this.displayCharacters()}
              </ul>
              <CharacterDetails characterId={this.state.selected}/>
            </div>
        );
    } 
}

export default graphql(getCharactersQuery)(CharacterList);
