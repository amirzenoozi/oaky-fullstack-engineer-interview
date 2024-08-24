import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const API_URI: string = process.env.REACT_APP_API_URL ?? 'http://localhost:3200/graphql';
const client = new ApolloClient({
	link: new HttpLink({
		uri: API_URI,
	}),
	cache: new InMemoryCache(),
});

export default client;
