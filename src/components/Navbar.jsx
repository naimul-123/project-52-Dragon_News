import { useContext } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {


	const { user, logOut } = useContext(AuthContext)
	// console.log(user)

	const handlelogOut = () => {
		logOut()
			.then()
			.catch(error => console.log(error));
		// console.log(user)

	}
	const navLinks = (
		<>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/about'>About</Link>
			</li>
			<li>
				<Link to='/career'>Career</Link>
			</li>
		</>
	);
	return (
		<div className='navbar bg-base-100'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
						{navLinks}
					</ul>
				</div>

			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>{navLinks}</ul>
			</div>
			<div className='navbar-end gap-2'>
				<Link to="" className='text-3xl'><FaCircleUser></FaCircleUser></Link>

				{user ? <Link onClick={handlelogOut} className='bg-black-olive text-white px-8 py-2'>Log Out</Link> : <Link to="/login" className='bg-black-olive text-white px-8 py-2'>Login</Link>}

			</div>
		</div>
	);
};

export default Navbar;
