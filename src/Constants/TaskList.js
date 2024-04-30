
export const TaskObject ={
  
    task:{
     label:"Task",
     id:1,
     data:  ["Bug","Task","story","Epic","Spike"], 
     type:'select',
     selected:'',
     prop:'task'
    },

    assignedTo:{
        label:"Assigned Two",
        id:2,
        data:["Abhisehk","Mark","Kile","Martin"],
        type:'select',
        selected:'',
        prop:'assignedTo'
},
priority:{
    label:"Priority",
    id:10,
    data:  ["High","Medium","Low"], 
    type:'select',
    selected:'',
    prop:'priority'
},

storypoint:{
    label:"Story Point",
        id:3,
        data:[1,2,3,5,8],
        selected:'',
        type:'select',
        prop:'storypoint'
},
status:{
    label:"Status",
    id:30,
    data:["ToDo","inProgress","done"],
    selected:'',
    type:'select',
    prop:'status'
},
}



