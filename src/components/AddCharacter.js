import React, {Component} from 'react';
import {graphql, compose} from 'react-apollo';
import { addCharacterMutation, getCharactersQuery } from '../queries/queries';

//The purpose of this class is to just see how mutations work


class AddCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            location: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLocChange = this.handleLocChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleNameChange(e){
        this.setState({
            name: e.target.value
        });
    }

    handleLocChange(e){
        this.setState({
            location: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.addCharacterMutation({
            variables: {
                name = this.state.name,
                location = this.state.location
            },
            refetchQueries: [{query: getCharactersQuery}]
        });
    }

    render() {
        return(
            <form id="add-character" onSubmit={this.handleSubmit}>
                <div>
                    <label>Character name:</label>
                    <input type="text" onChange={(e) => this.handleNameChange(e)}/>
                </div>

                <div>
                    <label>Location:</label>
                    <input type="text"onChange={(e) => this.handleLogChange(e)}/>
                </div>
                    
                <button>Add Character</button>
            </form>
        );
    }
}

export default graphql(addCharacterMutation, {name: "addCharacterMutation"})(AddCharacter);
