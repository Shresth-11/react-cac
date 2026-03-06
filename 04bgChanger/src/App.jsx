import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >

      {/* onClick expects a function ------>> imp for its application in react with setColor method */}
      <div
        className="fixed flex flex-wrap
       justify-center bottom-12 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center gap-3 
          shadow-lg bg-white px-3 py-2 rounded-2xl"
        >
          <button
            className="outline-none px-4 py-1 rounded-full
             text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1
             rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1
             rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1
             rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="outline-none px-4 py-1
             rounded-full text-white shadow-lg"
            style={{ backgroundColor: "royalblue" }}
            onClick={() => setColor("royalblue")}
          >
            Royalblue
          </button>
          <button
            className="outline-none px-4 py-1
             rounded-full text-white shadow-lg"
            style={{ backgroundColor: "rosyBrown" }}
            onClick={() => setColor("rosyBrown")}
          >
            rosyBrown
          </button>
          <button
            className="outline-none px-4 py-1
             rounded-full text-white shadow-lg"
            style={{ backgroundColor: "lightPink" }}
            onClick={() => setColor("lightPink")}
          >
            lightPink
          </button>
          <button
            className="outline-none px-4 py-1
             rounded-full text-white shadow-lg"
            style={{ backgroundColor: "maroon" }}
            onClick={() => setColor("maroon")}
          >
            maroon
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
