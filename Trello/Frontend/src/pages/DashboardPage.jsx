import MainHeader from "../components/Header/MainHeader";
import Clockicon from "@mui/icons-material/AccessTime";
import Board from "../components/Section/Board";
import Image1 from "../asserts/Img/Image1.jpg";
import Image2 from '../asserts/Img/image2.jpg';
import Image3 from '../asserts/Img/images3.jpg';
import Image4 from "../asserts/Img/images4.jpg";
import Image5 from '../asserts/Img/images5.jpg';
import Image6 from '../asserts/Img/images6.jpg';
import Image7 from '../asserts/Img/images7.jpg';
import Image8 from '../asserts/Img/images8.jpg';
function DashboardPage() {
    const views = [
        { text: 'FrontEnd', image: Image2 },
        { text: 'Coordination', image: Image1 },
        { text: 'BackEnd', image: Image3 },
    ];
    const works = [
        { text: 'FrontEnd', image: Image2 },
        { text: 'Coordination', image: Image1 },
        { text: 'BackEnd', image: Image3 },
        { text: 'FrontEnd', image: Image4 },
        { text: 'Coordination', image: Image5 },
        { text: 'BackEnd', image: Image6 },
        { text: 'FrontEnd', image: Image7 },
        { text: 'Coordination', image: Image8 },
    ];
    return (<>
        <MainHeader />
        <div className="flex justify-center items-center w-full">
            <div className=" flex flex-col items-center justify-center w-4/6 bg-white h-full p-5 m-4">
                <div className="w-5/6 h-48 border border-silver rounded-md p-5 m-2 overflow-y-scroll">
                    <div className="flex flex-row items-center">
                        <Clockicon className="text-silverbold" />
                        <h2 className="text-silverbold p-2">Recently viewed</h2>
                    </div>
                    <div className="flex flex-wrap mt-3">
                        <Board props={views} />
                    </div>
                </div>
                <div className="w-5/6 h-80 overflow-y-scroll border border-silver rounded-md p-5 m-2">
                    

                        <h2 className="text-silverbold p-2 font-bold">YOUR WORKSPACES</h2>
                        <div className="flex flex-wrap mt-3">
                            <Board props={works} />
                        </div>

                   
                </div>
            </div>
        </div>
    </>);
}
export default DashboardPage;