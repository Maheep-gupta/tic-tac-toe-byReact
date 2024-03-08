import { Route, Router, Routes } from "react-router-dom"
import Board from "./Components/Board"
import Loader from "./Components/Loader"
import { Suspense, lazy } from "react"
import OfflineMode from "./Components/OfflineMode"
const StartPage = lazy(() => import("./Components/StartPage"))


function App() {

  return (
    <>
      <Routes>
        <Route path="/"  element={<Suspense fallback={<Loader/>}>
          <StartPage />
        </Suspense>}
        ></Route>

        <Route path="/offline"  element={<Suspense fallback={<Loader/>}>
          <OfflineMode />
        </Suspense>}
        ></Route>
      </Routes>







      {/* <div className=" w-screen h-screen overflow-hidden">
        <div className="bg-[#fff] text-[#242424] text-2xl md:text-4xl lg:text-6xl font-semibold text-center">
          <h1>Tic Tac Toe</h1>
        </div>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <Board />
        </div>
      </div> */}
    </>
  )
}

export default App
