import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import Error from './pages/error';
import Layout from './pages/layout';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { ApolloProvider } from '@apollo/client';
import client from '@/modules/apolloClient';
import '@icon-park/react/styles/index.css';
import './index.css';
import './i18n';

const router = createBrowserRouter([
	{
		element: <Layout/>,
		children: [
			{
				path: "/",
				element: <Navigate to="/en" replace />,
			},
			{
				path: '/:lng',
				element: <Home/>,
				errorElement: <Error/>,
			},
		],
	},
	{
		path: '/error',
		element: <Error/>,
		errorElement: <Error/>,
	},
	{
		path: '*',
		element: <Error/>,
		errorElement: <Error/>,
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<ApolloProvider client={client}>
			<React.StrictMode>
				<RouterProvider router={router}/>
			</React.StrictMode>
		</ApolloProvider>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
