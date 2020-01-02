import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components
import CharacterList from './components/CharacterList';

//apollo client setup
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Rick and Morty Character List</h1>
        <CharacterList />
        {/* <AddCharacter /> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
