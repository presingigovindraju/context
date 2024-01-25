import React,{useState} from "react";
import MyContext from "./MyContext";

const ContextProvider = (props)=>{
     
   const [engineer,setEngineer] = useState({
       myName:"Raju",
       myAge : 26,
       graducation : "Pragati"
   })

    return (
        <MyContext.Provider value={{
            engineer:engineer,
            setEngineer:setEngineer
        }}>
              {props.children}
        </MyContext.Provider>
    )
}


export default ContextProvider
