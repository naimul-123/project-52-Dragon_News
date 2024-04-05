import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
export const NewsContext = createContext();

function App() {
	const [newslists, setNewsLists] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			try {
				const res = await fetch('./data/news.json');
				const data = await res.json();
				setNewsLists(data);
				// setNewsCatagories(data);
			} catch (error) {
				console.log(error);
			}
		};
		// console.log(newslists);
		loadData();
	}, []);

	return (
		<div className='font-poppins max-w-screen-2xl px-60 py-10 mx-auto'>
			<NewsContext.Provider value={newslists}>
				<Outlet></Outlet>
			</NewsContext.Provider>
		</div>
	);
}

export default App;
