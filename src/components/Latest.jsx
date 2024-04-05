import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Latest = () => {
    return (
        <div className="inline-flex items-center w-full bg-anti-flash-white p-3 my-6">
            <span className="bg-spanish-crimson min-w-fit  text-white p-3">Latest News</span>
            <Marquee speed={100} pauseOnHover={true} className="space-x-3 ">
                <Link>News1....</Link>
                <Link>News2....</Link>
                <Link>News3....</Link>
                <Link>News4....</Link>
            </Marquee>
        </div>
    );
};

export default Latest;