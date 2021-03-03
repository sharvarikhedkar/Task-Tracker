import Task from './Task'

const Tasks = ({tasks,onDelete,onToggle}) => {
        //looping through tasks and outputting component, passing task in as a prop
        return (
        <>
            {tasks.map((task,index) => (
                <Task
                key = {index} 
                task = {task} 
                onDelete = {onDelete}
                onToggle = {onToggle}
                />
                
            ))}
            
        </>
    )
}

export default Tasks
 