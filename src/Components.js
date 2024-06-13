import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';

const ModifierUserTask = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
    const [newTask, setNewTask] = useState('');
    const [editIndex, setEditIndex] = useState(-1);
    const [editText, setEditText] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask) {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const toggleCompletion = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = tasks.filter((_, taskIndex) => index !== taskIndex);
        setTasks(newTasks);
    };

    const startEditing = index => {
        setEditIndex(index);
        setEditText(tasks[index].text);
    };

    const cancelEditing = () => {
        setEditIndex(-1);
        setEditText('');
    };

    const submitEdit = index => {
        const newTasks = [...tasks];
        newTasks[index].text = editText;
        setTasks(newTasks);
        cancelEditing();
    };
    return (
        <div className="App">
            <div className="button-container">
                <a href="https://rodrigomartins20.github.io/user-task/" className="main-button">
                    Main Page
                </a>
            </div>
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
            </header>
            <div className="container">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={addTask}>Add Task</button>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index}>
                                <td style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                    {editIndex === index ? (
                                        <input
                                            type="text"
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
                                        />
                                    ) : (
                                        task.text
                                    )}
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleCompletion(index)}
                                    />
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <>
                                            <button onClick={() => submitEdit(index)}>Submit</button>
                                            <button onClick={cancelEditing}>Cancel</button>
                                        </>
                                    ) : (
                                        <button onClick={() => startEditing(index)}>Edit</button>
                                    )}
                                </td>
                                <td>
                                    <button onClick={() => removeTask(index)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ModifierUserTask;
