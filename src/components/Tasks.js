import Task from './Task'

const Tasks = ({tasks,onDelete}) => {
        //looping through tasks and outputting component, passing task in as a prop
        return (
        <>
            {tasks.map((task) => (
                <Task key = {task.id} task = {task} onDelete = {onDelete}/>
                
            ))}
            
        </>
    )
}

export default Tasks
 