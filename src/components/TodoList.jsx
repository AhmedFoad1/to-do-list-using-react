import { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (title, date) => {
        const currentDate = new Date().toISOString().split('T')[0];
        if (title) {
            setTasks((prevTasks) => [
                ...prevTasks,
                { title, date: date || currentDate, status: 'pending' },
            ]);
        }
    };

    const removeTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    const toggleTaskStatus = (index) => {
        setTasks((prevTasks) =>
            prevTasks.map((task, i) =>
                i === index ? { ...task, status: task.status === 'pending' ? 'done' : 'pending' } : task
            )
        );
    };

    return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-600 min-h-screen flex items-start justify-center pt-10">
            <div className="w-full max-w-lg p-6 rounded-lg fixed top-10 shadow-2xl shadow-black bg-gradient-to-r from-gray-900 to-gray-700">
                <h1 className="text-3xl font-bold mb-4 text-center text-lime-200">To-Do List</h1>
                <TaskInput addTask={addTask} />
                <TaskList tasks={tasks} removeTask={removeTask} toggleTaskStatus={toggleTaskStatus} />
            </div>
        </div>
    );
};

export default TodoList;

