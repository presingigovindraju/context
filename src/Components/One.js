import React,{useContext} from "react";
import MyContext from "../Context/MyContext";

const One =()=>{

    const {engineer,setEngineer} = useContext(MyContext)





    return (
        <div>
             <h1>My Name :{engineer.myName="lali"}</h1>
             <h1>My Age :{engineer.myAge}</h1>
             <h1>Completed Graducation in :{engineer.graducation}</h1>
             <button onClick={()=>setEngineer({...engineer,myAge:engineer.myAge+1})}>Inc Age</button>
        </div>
    )
}

export default One