import {gql} from 'apollo-boost';

const getCharactersQuery = gql`
    {
        characters {
            results {
               id
               name 
            }
        }
    }
`

const getCharacterQuery = gql`   
    query($id: ID!){
        character(id: $id) {
            id
            name
            status
            species
            type
            origin {
                name
            }
            image
        }
    }
`

//this is a fake query for practice, it will not work
const addCharacterMutation = gql`
   mutation($name: String!, $location: String!){
       addCharacter(name:$name, location:$location)
   } 
`

export {getCharactersQuery, getCharacterQuery, addCharacterMutation};