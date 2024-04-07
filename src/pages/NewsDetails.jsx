import { useContext } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import RightSidebar from '../components/RightSidebar';
import NewsCard from '../components/NewsCard';
import { useParams } from 'react-router-dom';
import { NewsContext } from '../App';

const NewsDetails = () => {
    const news = useContext(NewsContext)
    const { id } = useParams();
    const singleNews = news.find((n) => n._id == id)
    console.log(singleNews)

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-4 gap-1  lg:grid-cols-4'>
                <div className='col-span-3'>
                    <NewsCard singleNews={singleNews} isDetails={true} heading={"Dragon News"}></NewsCard>
                </div>
                <RightSidebar></RightSidebar>
            </div>
        </div>
    );
};

export default NewsDetails;