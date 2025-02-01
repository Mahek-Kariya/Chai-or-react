import { useState } from "react"
function App() {
  const [color, setColor] = useState('#F7CFD8');

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-xl bg-black px-3 py-2 rounded-3xl gap-3">
          <button onClick={() =>setColor("#FF8383")} style={{backgroundColor: "#FF8383"}} className="outline-none px-4 py-1 rounded-full text-black shadow-lg">Red</button>
          <button onClick={() =>setColor("#A1EEBD")}  style={{backgroundColor: "#A1EEBD"}} className="outline-none px-4 py-1 rounded-full text-black shadow-lg">Green</button>
          <button onClick={() =>setColor("#7BD3EA")}  style={{backgroundColor: "#7BD3EA"}} className="outline-none px-4 py-1 rounded-full text-black shadow-lg">Blue</button>
          <button onClick={() =>setColor("#F6F7C4")}  style={{backgroundColor: "#F6F7C4"}} className="outline-none px-4 py-1 rounded-full text-black shadow-lg">Yellow</button>
          <button onClick={() =>setColor("#B1AFFF")}  style={{backgroundColor: "#B1AFFF"}} className="outline-none px-4 py-1 rounded-full text-black shadow-lg">Purple</button>
          <button onClick={() =>setColor("#F7CFD8")}  style={{backgroundColor: "#F7CFD8"}} className="outline-none px-4 py-1 rounded-full text-black shadow-lg">Pink</button>
        </div>
      </div>
    </>
  )
}

export default App
