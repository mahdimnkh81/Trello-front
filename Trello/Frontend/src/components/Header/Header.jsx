import Logo from '../../asserts/Img/trello.jpg';
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="flex justify-center bg-bgp items-center w-full h-28">
            <div className="flex justify-between items-center w-5/6 h-16 bg-slate-500">

                <div className="flex items-center w-3/4 max-[778px]:w-full">
                    <div className="w-1/3">
                        <img src={Logo} />
                    </div>
                    <div className="w-2/3 flex justify-start">
                        {/* <ul className="flex justify-between">
                            <li className="p-3 flex justify-center items-center font-semibold">Jobs<img className="w-7 p-1" src={Arrow} /></li>
                            <li className="p-3 flex justify-center items-center font-semibold"><a href="">For Employers</a><img className="w-7 p-1" src={Arrow} /></li>
                        </ul> */}
                    </div>
                </div>
                <div className="flex justify-between items-center w-72 max-[778px]:hidden">
                    <Link to="/">
                        <button className=" bg-primary hover:bg-white hover:border hover:border-primary hover:text-primary text-white font-semibold text-sm w-24 h-10 m-2 p-2 rounded">Login</button>
                    </Link>
                    <Link to="/SignUp">
                        <button className="bg-transparent hover:bg-primary text-primary font-semibold text-sm hover:text-white w-48 h-10 m-2 p-2 border border-primary-500 hover:border-transparent rounded">Candidate Signup</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;