import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#c8b6ff")

  return (
    <>
      <div className="w-full h-screen duration-150"
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 "
        style={{backgroundColor:"#bbd0ff"}}>
          <div className="flex gap-5 flex-wrap justify-center shadow-lg bg-white px-3 py-3 rounded-xl">
          <button 
          onClick={()=>setColor("#ffd6a5")}
          className="outline-none px-2 py-2 rounded-xl"
          style={{backgroundColor:"#ffd6a5"}}
          >ffd6a5
          </button>
          <button onClick={()=>setColor("#ffadad")}
          className="outline-none px-2 py-2 rounded-xl"
          style={{backgroundColor:"#ffadad"}}
          >ffadad
          </button>
          <button onClick={()=>setColor("#caffbf")}
          className="outline-none px-2 py-2 rounded-xl"
          style={{backgroundColor:"#caffbf"}}
          >caffbf
          </button>
          <button onClick={()=>setColor("#9bf6ff")}
          className="outline-none px-2 py-2 rounded-xl"
          style={{backgroundColor:"#9bf6ff"}}
          >9bf6ff
          </button>
          <button onClick={()=>setColor("#f7a072")}
          className="outline-none px-2 py-2 rounded-xl"
          style={{backgroundColor:"#f7a072"}}
          >f7a072
          </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
