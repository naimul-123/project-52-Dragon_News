import { useLoaderData } from 'react-router-dom';
import Header from '../components/Header';
import Latest from '../components/Latest';
import LeftSidebar from '../components/LeftSidebar';
import Navbar from '../components/Navbar';
import Newsbar from '../components/Newsbar';
import RightSidebar from '../components/RightSidebar';

const Home = () => {
    const news = useLoaderData()

    return (
        <div>
            <Header></Header>
            <Latest></Latest>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 gap-1  lg:grid-cols-4'>
                <LeftSidebar></LeftSidebar>
                <Newsbar news={news} heading={"Dragon News Home"}></Newsbar>
                <RightSidebar></RightSidebar>
            </div>
        </div>
    );
};

export default Home;
