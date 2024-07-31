import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TaskContext } from '../components/TaskContext';
import EditButton from '../components/EditButton'
import BackButton from '../components/BackButton';

const EditTaskPage = () => {
  const { id } = useParams();
  const { tasks, editTask } = useContext(TaskContext);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const taskToEdit = tasks.find(task => task.id === parseInt(id));
    if (taskToEdit) setTitle(taskToEdit.title);
  }, [tasks, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      editTask({ id: parseInt(id), title, completed: false });
      navigate('/');
    }
  };

  return (
    <div className="task-form-page">
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Task title"
          required
        />
        <EditButton/>
        <BackButton />
      </form>
    </div>
  );
};

export default EditTaskPage;
