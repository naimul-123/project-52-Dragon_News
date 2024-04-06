import { FaBookmark, FaEye } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';
import newsimg from '../assets/editorsInsight1.png';
import { Link } from 'react-router-dom';
import { LinearGradient } from 'react-text-gradients';

const NewsCard = () => {
	return (
		<div>
			<div className='flex items-center justify-between p-4 bg-anti-flash-white'>
				<div className='flex gap-2 items-center'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost btn-circle avatar'>
						<div className='w-10 rounded-full'>
							<img
								alt='Tailwind CSS Navbar component'
								src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
							/>
						</div>
					</div>
					<div>
						<h2 className='font-semibold text-3xl text-black-olive'>
							Awlad Hossain
						</h2>
						<p className='text-sm text-dark-silver'>2022-08-21</p>
					</div>
				</div>
				<div className='flex gap-2'>
					<FaBookmark></FaBookmark>
					<FaShareAlt></FaShareAlt>
				</div>
			</div>
			<div>
				<h2 className='font-bold text-xl text-black-olive'>
					Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
					Aid Package Yet
				</h2>
				<div>
					<img
						src={newsimg}
						alt=''
					/>
				</div>
				<div>
					<p>
						Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
						Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
						United States, Worthy News (Worthy News) – U.S. President Joe Biden
						has announced nearly $3 billion in new U.S. military a...{' '}
					</p>
					<Link className='font-semibold text-lg'>
						<LinearGradient gradient={['to left', '#FF8C47, #F75B5F']}>
							Read more
						</LinearGradient>
					</Link>
				</div>
				<div className='flex justify-between items-center'>
					<div className='rating rating-md'>
						<input
							type='radio'
							name='rating-7'
							className='mask mask-star-2 bg-warning'
						/>
						<input
							type='radio'
							name='rating-7'
							className='mask mask-star-2 bg-warning'
							checked
						/>
						<input
							type='radio'
							name='rating-7'
							className='mask mask-star-2 bg-warning'
						/>
						<input
							type='radio'
							name='rating-7'
							className='mask mask-star-2 bg-warning'
						/>
						<input
							type='radio'
							name='rating-7'
							className='mask mask-star-2 bg-warning'
						/>
						<span>4.9</span>
					</div>
					<div className='inline-flex items-center gap-3'>
						<FaEye></FaEye>
						<span>631</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
