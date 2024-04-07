import { FaBookmark, FaEye } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';
import newsimg from '../assets/editorsInsight1.png';
import { Link } from 'react-router-dom';
import { LinearGradient } from 'react-text-gradients';

const NewsCard = ({ singleNews }) => {
	const { author, title, details, image_url, _id } = singleNews
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
								src={author.img}
							/>
						</div>
					</div>
					<div>
						<h2 className='font-semibold text-3xl text-black-olive'>
							{author.name}
						</h2>
						<p className='text-sm text-dark-silver'>{author.published_date}</p>
					</div>
				</div>
				<div className='flex gap-2'>
					<FaBookmark></FaBookmark>
					<FaShareAlt></FaShareAlt>
				</div>
			</div>
			<div>
				<h2 className='font-bold text-xl text-black-olive'>
					{title}
				</h2>
				<div>
					<img
						src={image_url}
						alt=''
					/>
				</div>
				<div>
					{details.length > 200 ?
						<p>{details.slice(0, 200)}
							<Link to={`/news/${_id}`} className='font-semibold text-lg'>
								<LinearGradient gradient={['to left', '#FF8C47, #F75B5F']}>
									Read more
								</LinearGradient>
							</Link ></p> :
						<p>{details}</p>}
				</div>
				<div className='flex justify-between items-center'>
					{/* <div className='rating rating-md'>
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
					</div> */}
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
