import { useContext } from "react";
import { NewsContext } from "../App";


const Newsbar = () => {
    const newsLists = useContext(NewsContext)
    console.log(newsLists);
    return (
        <div className="border lg:col-span-2 ">
            
        </div>
    );
};

export default Newsbar;