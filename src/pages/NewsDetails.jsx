import React from 'react';
import Header from '../components/Header';
import Latest from '../components/Latest';
import Navbar from '../components/Navbar';
import RightSidebar from '../components/RightSidebar';
import Newsbar from '../components/Newsbar';
import NewsCard from '../components/NewsCard';
import { useParams } from 'react-router-dom';

const NewsDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 gap-1  lg:grid-cols-4'>
                {/* <NewsCard heading={"Dragon News"}></NewsCard> */}
                <RightSidebar></RightSidebar>
            </div>
        </div>
    );
};

export default NewsDetails;