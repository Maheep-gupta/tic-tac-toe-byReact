import React from 'react'
import Board from './Board'
import Logo from './Logo'
import { Link } from 'react-router-dom'

function OfflineMode() {
    return (
        <div className="relative isolate z-0 bg-white h-screen lg:px-8">

            <div className="mx-auto max-w-2xl h-full py-24 pt-0 flex flex-col items-center ">
                <div className="text-center">
                    <h1 className="text-4xl pb-10 font-bold tracking-tight mt-8 text-gray-900 sm:text-6xl">
                        Kattam Kut - Offline Mode
                    </h1></div>
                <div className='flex justify-between w-full text-lg font-semibold mb-12'>
                    <div className=''>
                        <h2>
                            Player 1 :-X
                        </h2>
                        <h2>
                            Player 2 :-O
                        </h2>
                    </div>
                    <div>
                        <h2>
                            Player 1's Score :-X
                        </h2>
                        <h2>
                            Player 2's Score :-O
                        </h2>
                    </div>
                </div>
                <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
                    <svg
                        className="relative left-[calc(50%-11rem)] -z-10 h-full max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                            fillOpacity=".3"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                            <linearGradient
                                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                                x1="1155.49"
                                x2="-78.208"
                                y1=".177"
                                y2="474.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9089FC" />
                                <stop offset={1} stopColor="#FF80B5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <Board />
            </div>
        </div>
    )
}

export default OfflineMode