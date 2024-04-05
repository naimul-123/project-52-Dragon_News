import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
const routes = createBrowserRouter([
	{
		path: '/',
		element: <App></App>,
		children: [
			{
				index: true,
				element: <Home></Home>,
			},
		],
	},
]);

export default routes;
