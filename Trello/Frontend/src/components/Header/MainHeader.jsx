import Arrow from '../../asserts/Img/arrow-down.svg';
import ProfilePic from "../../asserts/Img/Avatar.png";
import MailIcon from "../../asserts/Img/Vector.svg"
import { Link } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';

function MainHeader() {
    return (
        <div className="flex justify-end bg-white items-center w-full h-14 pr-14 pl-14 border-b border-silver">
            <div className='flex justify-start items-center w-2/6 h-10 bg-white'>
                <Sidebar />
                <Link to="/Board">
                    <button className='bg-primary text-white font-bold px-4 py-1 rounded-md mx-3'>
                        Create
                    </button>
                </Link>
            </div>
            <div className="flex justify-between items-center w-4/6 h-10 bg-white">
                <div className="flex items-center justify-center w-3/4 max-[778px]:w-full">
                    <div className="relative flex w-1/2 flex-wrap items-stretch">
                        <span
                            className="input-group-text absolute flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                            id="basic-addon2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5 fill-borderlite">
                                <path
                                    fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd" />
                            </svg>
                        </span>
                        <input
                            type="search"
                            className="relative m-0 block flex-auto rounded border border-solid border-borderlite bg-transparent bg-clip-padding px-3 pl-10 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                            placeholder="search job title or skill"
                            aria-label="Search"
                            aria-describedby="button-addon2" />


                    </div>
                </div>
                <div className="flex justify-between items-center w-40">
                    <div>
                        <img src={MailIcon} alt="" className='w-5' />
                    </div>
                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold pr-1 border border-primary rounded-3xl shadow flex justify-between items-center">
                        <img src={ProfilePic} alt="" className='rounded-3xl h-8 w-8 p-1' />
                        <span className='p-1 text-sm'>Anamoul</span>
                        <img className="w-6 p-1" src={Arrow} />
                    </button>
                </div>
            </div>

        </div>
    );
}

export default MainHeader;