import React, { useContext, useEffect } from 'react'
import noteContext from '../context/NoteContext'

function Home() {
    const a = useContext(noteContext)
    useEffect(() => {
       a.update()
    },[])
  return (
    <div>
      <h2>hii {a.state.name} and i am in {a.state.class}</h2>
    </div>
  )
}

export default Home
