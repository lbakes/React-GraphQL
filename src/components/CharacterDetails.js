import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getCharacterQuery} from "../queries/queries";

class CharacterDetails extends Component {

    displayCharacterDetails(){
        const {character} = this.props.data;
        if(character){
            return(
                <div>
                    <h2>{character.name}</h2>
                    <img src={character.image}/>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Type: {character.type}</p>
                    <p>Origin: {character.origin.name}</p>
                </div>
            )
        } else {
            return (
                <div>No book selected...</div>
            );
        }
    }

    render() {
        return (
            <div id="character-details">
              {this.displayCharacterDetails()}
            </div>
        );
    } 
}

export default graphql(getCharacterQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.characterId
            }
        }
    }
})(CharacterDetails);
