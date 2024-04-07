
import NewsCard from "./NewsCard";


const Newsbar = ({ news }) => {
    // console.log(news)
    return (
        <div className=" lg:col-span-2 ">
            {news.map((singleNews) => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)}

        </div>
    );
};

export default Newsbar;