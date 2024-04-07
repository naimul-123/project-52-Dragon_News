import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
	const [newsCatagories, setNewsCatagories] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			try {
				const res = await fetch('./data/categories.json');
				const data = await res.json();
				setNewsCatagories(data);
				// setNewsCatagories(data);
			} catch (error) {
				console.log(error);
			}
		};

		loadData();
	}, []);

	// console.log(newsCatagories);

	return (
		<div className='space-y-3'>
			<h2 className='font-semibold text-xl '>All Caterogy</h2>
			<div>
				<h3 className='text-black-olive bg-platinum py-4 px-8 text-center font-semibold text-xl'>
					National News
				</h3>
				<ul>

					{newsCatagories.map(catagory => <li className='pl-12 text-lg my-4' key={catagory.id}><Link className='link link-hover' to={`catagory/${catagory.id}`}>{catagory.name}</Link></li>)}
				</ul>
			</div>
		</div>
	);
};

export default LeftSidebar;
