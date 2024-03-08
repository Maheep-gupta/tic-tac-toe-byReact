import React, { useEffect, useState } from 'react'

function Board() {
    const [X, setX] = useState([]);
    const [O, setO] = useState([]);
    const [chance, setChance] = useState(0)
    const handleClick = (event) => {
        winner(X)
        const clickedDiv = event.currentTarget;
        if (chance % 2 == 0) {
            clickedDiv.innerText = 'x';
            setChance((prevChance) => prevChance + 1);
            setX((prev) => [...prev,clickedDiv.id])
            console.log(chance);
        } else {
            clickedDiv.innerText = 'o';
            setChance((prevChance) => prevChance + 1);
            setO((prev) => [...prev,clickedDiv.id])
        } 
    }
    
    const winner = (userPosition) => {
            const winnerPOS = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ]
            for (let index = 0; index < winnerPOS.length; index++) {
                const element = winnerPOS[index];
                // console.log(element);
                console.log("USer is at",userPosition);
                if (element===userPosition) {
                    console.log('Winner mil gya');
                }
            }
        }
    
    
    // console.log("X:-",X);
    // console.log("O:-",O);
    
    return (
        <div className='max-w-full flex flex-col justify-center items-center  '>
            <div className='flex grid-l-1'>

                <div id='1' className='h-20 w-20 m-2 border-2 border-white rounded-xl  block-shadow text-white text-6xl text-center' onClick={handleClick} ></div>
                <div id='2' className='h-20 w-20 m-2 border-2 border-white rounded-xl  block-shadow text-white text-6xl text-center' onClick={handleClick} ></div>
                <div id='3' className='h-20 w-20 m-2 border-2 border-white rounded-xl  block-shadow text-white text-6xl text-center' onClick={handleClick} ></div>
            </div>
            <div  className='flex grid-l-2'>

                <div id='4'  className='h-20 w-20 m-2 border-2 border-white rounded-xl  block-shadow text-white text-6xl text-center' onClick={handleClick} ></div>
                <div id='5' className='h-20 w-20 m-2 border-2 border-white rounded-xl  block-shadow text-white text-6xl text-center' onClick={handleClick} ></div>
                <div id='6' className='h-20 w-20 m-2 border-2 border-white rounded-xl  block-shadow text-white text-6xl text-center' onClick={handleClick} ></div>
            </div>
            <div className='flex grid-l-3'>

                <div id='7' className='h-20 w-20 m-2 border-2 border-white rounded-xl  block-shadow text-white text-6xl text-center' onClick={handleClick} ></div>
                <div id='8' className='h-20 w-20 m-2 border-2 border-white rounded-xl  block-shadow text-white text-6xl text-center' onClick={handleClick} ></div>
                <div id='9' className='h-20 w-20 m-2 border-2 border-white rounded-xl  block-shadow text-white text-6xl text-center' onClick={handleClick} ></div>
            </div>



        </div>
    )
}

export default Board




