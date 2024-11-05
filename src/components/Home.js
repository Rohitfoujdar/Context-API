import React, { useContext, useEffect } from 'react'
import noteContext from '../context/NoteContext'

function Home() {
    const a = useContext(noteContext)
    useEffect(() => {
       a.update()
    },[])
  return (
    <div>
      <h2>hii {a.name} and i am in {a.class}</h2>
    </div>
  )
}

export default Home
