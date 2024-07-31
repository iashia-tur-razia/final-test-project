import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../components/TaskContext';
import BackButton from '../components/BackButton';
import AddTaskButton from '../components/AddTaskButton'
import '../components/TaskForm.css';

const AddTaskPage = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ id: Date.now(), title, completed: false });
      navigate('/');
    }
  };

  return (
    <div className="task-form-page">
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Task title"
          required
        />
        <AddTaskButton/>
        <BackButton/>
      </form>
    </div>
  );
};

export default AddTaskPage;
