import  { useRef } from 'react';

const TaskInput = ({ addTask }) => {
    const taskTitleRef = useRef();
    const taskDateRef = useRef();

    const handleAddTask = () => {
        const title = taskTitleRef.current.value;
        const date = taskDateRef.current.value;
        addTask(title, date);
        taskTitleRef.current.value = '';
        taskDateRef.current.value = '';
    };

    return (
        <div className="flex items-center mb-4">
            <input
                type="text"
                ref={taskTitleRef}
                placeholder="Task Title"
                className="flex-1 p-2 mr-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex">
                <input
                    type="date"
                    ref={taskDateRef}
                    className="p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleAddTask}
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
                >
                    Add Task
                </button>
            </div>
        </div>
    );
};

export default TaskInput;

