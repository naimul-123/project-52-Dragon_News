
import { Outlet } from 'react-router-dom';


function App() {


	return (
		<div className='font-poppins max-w-screen-2xl px-60 py-10 mx-auto'>

			<Outlet></Outlet>

		</div>
	);
}

export default App;
