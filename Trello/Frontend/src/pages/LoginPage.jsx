
import Header from '../components/Header/Header';
import Manpic from "../asserts/Img/image.png";
import {Link} from "react-router-dom";
import F from "../asserts/Img/email.svg";
import HiredNumber from "../components/Footer/HiredNumber";

function LoginPage() {
   
    return (
        <>
            <div className=" bg-bgp">
                <Header />
                <div className="w-full flex justify-center items-center">
                    <div className="w-5/6 flex justify-center items-center">
                        <div className="w-2/3 max-[778px]:hidden">
                            <img src={Manpic} alt="" />
                        </div>
                        <div className='w-1/3 max-[778px]:w-full'>
                            <div className="w-full flex ">
                                <div className="w-full min-h-screen bg-purple-400 flex justify-center items-center">
                                    <div className=" w-full py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                                        <div>
                                            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Login</h1>
                                        </div>
                                        <div className="space-y-4">
                                            
                                            <input type="text" placeholder="email address" class="before:content-['HelloWorld'] block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" />
                                            <input type="text" placeholder="password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-500" />
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div className="py-5">
                                                <input type="checkbox" className='m-2' />
                                                <label for="">Remember password</label>
                                            </div>
                                            <div className="py-5 text-right text-sm">
                                                <a href="#" className="text-primary font-semibold">Forgot password?</a>
                                            </div>
                                        </div>
                                        <div className="text-center mt-6">
                                            <button className="w-full py-2 text-xl font-bold text-white bg-primary rounded-lg hover:bg-purple-500 transition-all">Login</button>
                                            <p className="mt-4 text-sm">New Job Seeker? <Link to="/SignUp"><span className="cursor-pointer text-purple font-semibold"> SignUp</span></Link></p>
                                        </div>
                                    </div>
                                    <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
                                    <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <HiredNumber />
            <div className=" w-full h-72 bg-white"></div> */}
        </>
    );
}

export default LoginPage;