import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NewsDetails from '../pages/NewsDetails';
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
	{
		path: '/',
		element: <App></App>,
		children: [
			{
				index: true,
				element: <Home></Home>,
				loader: () => fetch('/data/news.json')
			},
			{
				path: '/news/:id',
				element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
			},
			{
				path: '/login',
				element: <Login></Login>
			},
			{
				path: '/register',
				element: <Register></Register>
			},
		],
	},
]);

export default routes;
