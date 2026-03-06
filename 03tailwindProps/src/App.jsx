import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="shresth" />
    </>
  )
}

export default App



// REACT FIBRE    ***********************************

//React Fiber is an ongoing reimplementation of React's core algorithm.
//  It is the culmination of over two years of research by the React team.
// The goal of React Fiber is to increase its suitability for areas like animation, 
// layout, and gestures. Its headline feature is incremental rendering: the ability to 
// split rendering work into chunks and spread it out over multiple frames.

// Other key features include the ability to pause, abort, or reuse work as
//  new updates come in; the ability to assign priority to different types of updates;
//  and new concurrency primitives.




// reconciliation ----->>>
// The algorithm React uses to diff one tree with another to determine which parts need to be changed.


// Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique." Since fibre which is introduced , 
// increases performance using keys and if keys  are not used then the performnce degrades too much.




// React createRoot create a virtual DOM which updates the ui where it is changed or updated

// In react there is still a concept of virtual dom and it updated by use of fibre algorithm

// Reconciliation is the algorithm behind what is probably understood  as the "Virtual DOM"

// Reconciliation is the algortihm comparing between the two trees (virtual dom & dom), it is the diff algorithm