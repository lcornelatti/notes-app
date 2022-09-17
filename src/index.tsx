import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './NotesApp';
import theme from './theme';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const hasuraUri = 'https://content-redfish-61.hasura.app/v1/graphql'
const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
const client = new ApolloClient({
  uri: hasuraUri,
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
  </ApolloProvider>,
);
