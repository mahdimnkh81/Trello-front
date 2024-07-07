import Pic1 from "../../asserts/Img/Rectangle 3891.png";
import Pic2 from "../../asserts/Img/Rectangle 3892.png";
import Pic3 from "../../asserts/Img/Rectangle 3893.png";
import Pic4 from "../../asserts/Img/Rectangle 3894.png";
import Pic5 from "../../asserts/Img/Rectangle 3895.png";
import Pic6 from "../../asserts/Img/Rectangle 3896.png";
import Pic7 from "../../asserts/Img/Rectangle 3897.png";


function HiredNumber(){
    return(
        <>
        <div className="w-full flex justify-center items-center relative">
            <div className="w-5/6 shadow-md flex-col bg-white rounded-xl absolute top-0 -mt-20 flex justify-center items-center p-8">
                <div className="flex justify-center items-center pb-8">
                    <h1 className="font-bold min-[778px]:text-3xl">Let’s get you hired by 30,000 employers</h1>
                </div>
               
                <div className="flex min-[1200px]:justify-center items-center flex-row max-[1124px]:overflow-x-scroll">
                        <img src={Pic1} alt="" className="w-32 m-2"/>
                        <img src={Pic2} alt="" className="w-32 m-2"/>
                        <img src={Pic3} alt="" className="w-32 m-2"/>
                        <img src={Pic4} alt="" className="w-32 m-2"/>
                        <img src={Pic5} alt="" className="w-32 m-2"/>
                        <img src={Pic6} alt="" className="w-32 m-2"/>
                        <img src={Pic7} alt="" className="w-32 m-2"/>
                       
                </div>
             
            </div>
        </div>
        </>
    );
}

export default HiredNumber;