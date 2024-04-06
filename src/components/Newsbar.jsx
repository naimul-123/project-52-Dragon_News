import { useContext } from "react";
import { NewsContext } from "../App";
import NewsCard from "./NewsCard";


const Newsbar = () => {
    const newsLists = useContext(NewsContext)
    console.log(newsLists);
    return (
        <div className=" lg:col-span-2 ">
            <NewsCard></NewsCard>
        </div>
    );
};

export default Newsbar;