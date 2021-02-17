const tasks = [
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
]

const Tasks = () => {
    return (
        <div>
            {tasks.map(task => (
                <h3 key = {task.id}>{task.text}</h3>
                
            ))}
            
        </div>
    )
}

export default Tasks
 