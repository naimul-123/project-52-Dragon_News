import headerImg from "../assets/logo.png"
import moment from 'moment';

const Header = () => {

    return (
        <div className="text-center flex flex-col items-center space-y-3">
            <img src={headerImg} alt="" />
            <p className="text-lg">Journalism Without Fear or Favour</p>
            <p className="font-medium text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;