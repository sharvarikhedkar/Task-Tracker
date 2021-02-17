import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

const App = () => {
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: 'Appointment',
        day: 'Feb 5 at 2pm',
        reminder: true,
    
    },
        
    {
        id: 2,
        text: 'Flight',
        day: 'Feb 8 at 3pm',
        reminder: true,
    
    },
    
    {
        id: 3,
        text: 'Final exam',
        day: 'Feb 1 at 2pm',
        reminder: false,
    },
    ])
    
  return (
    <div className='container'>
      <Header/>
      <Tasks tasks = {tasks}/>
    </div>
  )
}

export default App;


