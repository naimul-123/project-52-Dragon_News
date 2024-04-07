
import NewsCard from "./NewsCard";
import PropTypes from 'prop-types';

const Newsbar = ({ news }) => {
    // console.log(news)
    return (
        <div className=" lg:col-span-2 ">
            {news.map((singleNews) => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)}

        </div>
    );
};
Newsbar.propTypes = {
    news: PropTypes.array.isRequired
}
export default Newsbar;