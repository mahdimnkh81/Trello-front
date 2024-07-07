


function Board({props}){

    


    return (
        <div>

            <div className="flex flex-wrap">

                {props.map(list => (
                    <div className="w-40 h-20 overflow-hidden m-2 relative rounded cursor-pointer">
                        <img className="w-40 h-20" src={list.image} />
                        <p className="text-white absolute top-0 font-bold p-2">{list.text}</p>
                    </div>
                ))}
            </div>




        </div>
    );
};

export default Board;