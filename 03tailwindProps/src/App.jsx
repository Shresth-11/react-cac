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
      <Card username="hitesh" />
    </>
  )
}

export default App


// In react there is still a concept of virtual dom and it updated by use of fibre algorithm

// Reconciliation is the algorithm behind what is probably understood  as the "Virtual DOM"

// Reconciliation is the algortihm comparing between the two trees (virtual dom & dom), it is the diff algorithm