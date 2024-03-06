import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
  const dispatch = useDispatch();
  const mystate1 = useSelector(state=>state.reducer1)


  return (
    <>
     <div>the boiler component </div>
    </>
  )
}

export default App
