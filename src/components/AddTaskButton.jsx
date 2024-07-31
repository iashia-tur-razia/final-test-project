import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddTaskButton.css'

const AddTaskButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/add');
    };

    return (
        <button className="add-task-button" onClick={handleClick}>
            +Add Task
        </button>
    );
};

export default AddTaskButton;
