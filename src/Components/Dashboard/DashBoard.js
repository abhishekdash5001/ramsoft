import Avatar from '@mui/material/Avatar';

import './dashboard.css';
import { Button } from '@mui/material';
import Createtask from '../CreateTask/CreateTask';
import { useState } from 'react';
import TaskView from '../TaskView/TaskView';
const Dashboard = () => {
    let [modal,setModal]= useState(false);
    let [modalData,setModalData]= useState({});

    const openModalForEdit=(e)=>{
        setModalData({...e});
        setModal(true)
    }
    return ( <>
   <header className='header'>
   <section>
    Ramsoftware Jira
   </section>
    <div className='header--create__logo'>
        <Button variant="outlined" onClick={()=>setModal(true)}>Create</Button>
    <Avatar alt={'username'} sx={{ width:25,height:25 }} src="https://mui.com/static/images/avatar/1.jpg"></Avatar>
    </div>
    
    
       

   </header>
   <div>
    <TaskView onEdit={(e)=>{openModalForEdit(e)}}/>
    </div>
   <>
   {
    modal? <div className='d-flex d-flex-justify-content-center'>
    <Createtask click={()=>{
        setModal(false);
        setModalData({
            assignedTo:'',
            priority:'',
            name:'',
            status:'',
            storypoint:'',
            task:''

        })
    }} data={modalData}/>
   </div>:null
  }
   </>
 
  
    </> );
}
 
export default Dashboard;