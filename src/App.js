
import './App.css';
import Dashboard from './Components/Dashboard/DashBoard';
import { createContext, useEffect, useState } from 'react';
import { jiratask } from './API/storeData';
export const  TaskContext = createContext({
  todo:{},
  inProgress:{},
  done:{}
})
function App() {
   let [task,setTask]= useState({ToDo:{},
  done:{},
inProgress:{}})

useEffect(()=>{
  setTask(jiratask.fetchData())
},[])

   const changeData=()=>{
    let a ={...jiratask.fetchData()}
setTask(a)
   }
  return (
    <TaskContext.Provider value={{state:task,change:changeData}}>
<div className="App">
      <Dashboard/>
    </div>
    </TaskContext.Provider>
    
  );
}

export default App;
