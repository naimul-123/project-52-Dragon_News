
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

export const NewsContext = createContext();


function App() {

	const news = useLoaderData();

	return (
		<div className='font-poppins max-w-screen-2xl px-60 py-10 mx-auto'>
			<NewsContext.Provider value={news}>
				<Outlet></Outlet>
			</NewsContext.Provider>
		</div>
	);
}

export default App;
