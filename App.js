import React, { Component } from "react";
import { AppContainer } from "./component/navWrapper";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

//import { black } from "ansi-colors";
const link = createHttpLink({ uri: "http://localhost:8000/graphql?" });
/*const client = new ApolloClient({
  uri: "http://localhost:8000/graphql?"
});
*/

//Define your client for your APolloProvider connecting to your graphql server.
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    );
  }
}
export default App;
