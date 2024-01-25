import React,{useContext} from "react";
import MyContext from "../Context/MyContext";


const Two =()=>{

   const {engineer,setEngineer} = useContext(MyContext)

    return (
        <div>
             <h1>My Graducation :{engineer.graducation="M-Teach"}</h1>
             <h1>My Graducation :{engineer.myAge}</h1>
             <button onClick={()=>setEngineer({engineer,myAge:engineer.myAge-1})}>Dec Age</button>
        </div>
    )
}

export default Two