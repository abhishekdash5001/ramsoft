import { useContext } from 'react';
import './Taskview.css';

import  { TaskContext } from '../../App';
import { Card,CardContent ,Typography,CardActions,Button} from '@mui/material';

const TaskView = ({onEdit}) => {
    let task = useContext(TaskContext);
    let ToDo = Object.values(task.state.ToDo);
    let done =Object.values(task.state.done);
    let inProgress =Object.values(task.state.inProgress);
    
    return ( <>
    
    <div className="Taskview">
        <div className="Taskview__todo">
           { ToDo?.length > 0 &&  ToDo.map(({assignedTo,description,name,priority,task,status,storypoint,id})=>
             <Card variant="outlined" key={name+task}  className='taskcards'>
              
                 <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {name}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        {task}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        {storypoint}
      </Typography>
      <Typography variant="h5" component="div" >
       {status}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Assigned To - {assignedTo}
      </Typography>

      <Typography variant="body2">
        {description}
      </Typography>
      <Typography variant="h6" component="div">
       {priority}
      </Typography>
      
    </CardContent>
    <CardActions>
      <Button size="small" onClick={()=>onEdit({assignedTo,description,name,priority,task,status,storypoint,id})} >Edit</Button>
    </CardActions>
                </Card>
        )}

        </div>
        <div className="Taskview__inProgress">
        { inProgress?.length > 0 &&  inProgress.map(({assignedTo,description,name,priority,task,status,storypoint,id})=>
          <Card variant="outlined" key={name+task}  className='taskcards'>
            
 <>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {name}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        {task}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        {storypoint}
      </Typography>
      <Typography variant="h5" component="div">
       {status}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Assigned To - {assignedTo}
      </Typography>

      <Typography variant="body2">
        {description}
      </Typography>
      <Typography variant="h6" component="div">
       {priority}
      </Typography>
      
    </CardContent>
    <CardActions>
      <Button size="small" onClick={()=>onEdit({assignedTo,description,name,priority,task,status,storypoint,id})}>Edit</Button>
    </CardActions>
  </>

          </Card>
       
        )}
</div>
<div className="Taskview__done">
{ done?.length > 0 &&  done.map(({assignedTo,description,name,priority,task,status,storypoint,id})=>
           <Card variant="outlined" key={name+task}  className='taskcards'>
            
                  <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {name}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        {task}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        {storypoint}
      </Typography>
      <Typography variant="h5" component="div" sx={{color:'green'}}>
       {status}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Assigned To - {assignedTo}
      </Typography>

      <Typography variant="body2">
        {description}
      </Typography>
      <Typography variant="h6" component="div">
       {priority}
      </Typography>
      
    </CardContent>
    <CardActions>
      <Button size="small" onClick={()=>onEdit({assignedTo,description,name,priority,task,status,storypoint,id})}>Edit</Button>
    </CardActions>
                </Card>
        )}
</div>

    </div>
    </> );
}
 
export default TaskView;