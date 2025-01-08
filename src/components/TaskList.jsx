import TaskItem from './TaskItem';

const TaskList = ({ tasks, removeTask, toggleTaskStatus }) => {
    return (
        <ul className="space-y-2">
            {tasks.map((task, index) => (
                <TaskItem
                    key={task.id}
                    index={index}
                    task={task}
                    removeTask={removeTask}
                    toggleTaskStatus={toggleTaskStatus}
                />
            ))}
        </ul>
    );
};

export default TaskList;

