import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import Dashboard from './Components/Dashboard/DashBoard';


test('renders learn react link', () => {
  render(<App />);
 
  const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    const create = screen.getByTestId("create");
      
    expect(create).toBeDisabled()
  const nameInput = screen.getAllByRole("textbox")
  const Task = screen.getByTestId("my-wrapperTest-Task");
  fireEvent.change(Task,"Bug")
  let a =[{
   key: "my-wrapperTest-AssignedTwo",
   value:"Kile"
  },{
    key: "my-wrapperTest-Priority",
    value:"High"
  },
{
  key: "my-wrapperTest-StoryPoint",
    value:"2" 
},
{
  key: "my-wrapperTest-Status",
    value:"ToDo" 
}
]

for(let z=0;z<a.length;z++){
  const get = screen.getByTestId(a[z].key);
  fireEvent.change(get,a[z].value)
}
 

  
    for( let i =0;i <nameInput.length;i++){
      fireEvent.change(nameInput[i],"Abhishek")
     expect(nameInput[i]).toBeInTheDocument()
    }

    


});
