
import { TaskObject } from '../../Constants/TaskList';
import './createtask.css';

import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import FormControl from '@mui/material/FormControl';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, Button, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useContext, useState } from 'react';
import  { TaskContext } from '../../App';
import { InputLabel } from '@mui/material';
import { jiratask } from '../../API/storeData';
const Createtask = ({ click,data }) => {
    const [taskObject,setTaskObject ]= useState(Object.values(TaskObject).map((e)=>{
        if(Object.keys(data).length >0){
            
            return {
                ...e,
                selected:data[e.prop]
            }
        }else{
            return e
        }
    }));
    let task = useContext(TaskContext);
    const [saved,setSaved]=useState({
        status:'',
        messeage:''
    });
    const [name,setName]= useState(data.name?data.name:'');
    const [description,setDescription]= useState(data.description?data.description:'');
    const [toogle,setToggle] = useState(Object.values(taskObject).map((e)=>  e.selected === ''?false:true))
    const handleChange = (event,index) => {
     let deepT = [...toogle];
     deepT[index]= true
        setToggle(deepT)
        let deep = [...taskObject];
        deep[index]['selected']= event.target.value;
        setTaskObject(deep);
    };
    const createJira=()=>{
        
        let obj={
            name:name,
            description:description,
            assignedTo:taskObject[1].selected,
            priority:taskObject[2].selected,
            storypoint:taskObject[3].selected,
            task:taskObject[0].selected,
            status:taskObject[4].selected,
            id:data? data.id:undefined
            

        }
      let messageObj=jiratask.CreateJira(obj);
      if(messageObj.status){
        task.change();
        click()

        
      }
      setSaved(messageObj)
       
      
    }
    return (
        <div className="createtask">
            <div className='w-100 d-flex flex-end'>
            <CloseIcon fontSize='small' onClick={click} />
            </div>
           
            <div className='d-flex d-flex-coloumn'>
            <div  className='css-1e7cuzv-MuiFormControl-root' >
                    <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}  sx={{width:200}}/>
                    </div>
                    {taskObject?.map((taskobject,index) =>
                    <FormControl  key={taskobject.id} sx={{ m: 1, minWidth: 200 }} >
                        <div style={{ position: "relative" }}>
                            <InputLabel id="demo-simple-select-autowidth-label">{taskobject.label}</InputLabel>
                            <Select   data-testid={`my-wrapperTest-${taskobject.label.replace(" ","")}`}  labelId="demo-simple-select-autowidth-label" sx={{width:200}} label={taskobject.label}   onChange={(e)=>handleChange(e,index)}value={taskobject.selected}
          id="demo-simple-select-autowidth">
                                {
                                    taskobject.data.map((e) =>

                                        <MenuItem key={e} value={e}>{e}</MenuItem>
                                    )
                                }
                            </Select>


                        </div>
                        </FormControl>
                    )}
                    <div className='css-1e7cuzv-MuiFormControl-root'>
                    <BaseTextareaAutosize aria-label="minimum height" minRows={3} style={{borderRadius:'4px'}}  value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                    




              

            </div>
            
            <Button variant="outlined"  data-testid="create" disabled={new Set(toogle).has(false) ||  name.length === 0} onClick={()=>createJira()} >Create</Button>
            {
                saved.status === ''?null:<div className='mt-2'>
                
                {saved.status? <Alert  severity="success">
  {saved.message}
</Alert>:<Alert  severity="error">
  {saved.message}
</Alert>}
                </div>
            }
            
        </div>

    );
}

export default Createtask;