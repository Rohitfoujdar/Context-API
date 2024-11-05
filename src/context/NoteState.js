import React, { useState } from "react";
import noteContext from "./NoteContext";
const NoteState = (props) =>{
    const s1 ={
        name:"react js",
        class: "5b"
    }
    const [state, setState] = useState(s1)
    const update = () =>{
        setTimeout(() => {
          setState({
            name:"React JS",
            class: "8b"})
        },2000)
    }
return(
   <noteContext.Provider value={{state, update}}>
      {props.children}
   </noteContext.Provider>
);
}

export default NoteState;