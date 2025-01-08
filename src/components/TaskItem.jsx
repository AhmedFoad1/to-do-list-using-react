import React from 'react';

const TaskItem = ({ index, task, removeTask, toggleTaskStatus }) => {
    const statusClass = task.status === 'pending' ? 'bg-gray-200 text-gray-800' : 'bg-green-100 text-green-700 underline font-bold';

    return (
        <li className={`p-4 flex items-center rounded ${statusClass}`}>
            <div className="flex-1 flex justify-between items-center overflow-hidden">
                <span className="flex-1 text-ellipsis whitespace-nowrap">
                    {task.title}
                </span>
                <span>{task.date}</span>
            </div>
            <button
                onClick={() => toggleTaskStatus(index)}
                className={`text-xl mx-2 ${task.status === 'pending' ? 'text-gray-600 hover:text-green-500' : 'text-green-600'}`}
            >
                <i className="fas fa-check-circle pr-4"></i>
            </button>
            <button
                onClick={() => removeTask(index)}
                className="text-xl text-red-500 hover:text-red-600"
            >
                <i className="fas fa-trash"></i>
            </button>
        </li>
    );
};

export default TaskItem;

