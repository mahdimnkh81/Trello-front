import React, { useState } from 'react';
import Column from '../components/Section/Column';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Link } from 'react-router-dom';

const Boards = () => {


    const [columns, setColumns] = useState([
        { id: 1, name: 'To Do', cards: [{ id: 1, content: 'Task 1' }] },
        { id: 2, name: 'In Progress', cards: [{ id: 2, content: 'Task 2' }] },
        { id: 3, name: 'Done', cards: [{ id: 3, content: 'Task 3' }] },
    ]);


    const addCard = (columnId, cardContent) => {
        setColumns(prevColumns =>
            prevColumns.map(column =>
                column.id === columnId
                    ? {
                        ...column,
                        cards: [
                            ...column.cards,
                            { id: Math.random(), content: cardContent }, // Use unique ID in a real app
                        ],
                    }
                    : column
            )
        );
    };
    return (
        <>
            <div className="flex justify-center items-center w-full h-screen ">
                <div className="flex flex-col justify-start items-center w-5/6 h-screen relative">

                    <div className=" p-10 border border-silver m-20 overflow-y-scroll rounded-md">
                        <DndProvider backend={HTML5Backend}>
                            <div className="board">
                                {columns.map(column => (
                                    <Column
                                        key={column.id}
                                        name={column.name}
                                        cards={column.cards}
                                        columnId={column.id}
                                        addCard={addCard}
                                    />
                                ))}
                            </div>
                        </DndProvider>
                    </div>
                    <div className='flex justify-start w-full absolute bottom-10'>
                        <Link to="/dashboard">
                            <button className='bg-primary text-white font-bold px-4 py-1 rounded-md mx-5 '>
                                Back
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Boards;