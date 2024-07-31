import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../components/TaskContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditButton from '../components/EditButton';
import TaskModal from '../components/TaskModal';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  const { deleteTask, toggleComplete } = useContext(TaskContext);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
  };

  const handleDeleteClick = (e, taskId) => {
    e.stopPropagation(); 
    deleteTask(taskId);
  };

  return (
    <div>
      <ul className="task-list">
        {tasks.map(task => (
          <li
            key={task.id}
            className={task.completed ? 'completed' : ''}
            onClick={() => handleTaskClick(task)}
          >
            <span onClick={() => toggleComplete(task.id)}>{task.title}</span>
            <div className="task-actions">
              <EditButton taskId={task.id} /> 
              <button
                onClick={(e) => handleDeleteClick(e, task.id)} // Handle delete click
                className="delete-button"
              >
                <DeleteForeverIcon fontSize="small" /> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selectedTask && (
        <TaskModal task={selectedTask} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default TaskList;
