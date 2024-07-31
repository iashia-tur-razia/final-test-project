import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../components/TaskContext';
import AddTaskButton from '../components/AddTaskButton'
import TaskList from '../components/TaskList';
import RuleIcon from '@mui/icons-material/Rule';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import './HomePage.css';

const HomePage = () => {
  const { tasks } = useContext(TaskContext);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'not_completed') return !task.completed;
    return true;
  }).filter(task => task.title.includes(search));

  return (
    <div className="home-page">
      <h1>Todo List</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search tasks"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
        <AddTaskButton/>
        </div>
        <div className="filters">
          <button onClick={() => setFilter('all')}><RuleIcon  fontSize="small"/> All</button>
          <button onClick={() => setFilter('completed')}><DoneAllIcon  fontSize="small"/>Completed</button>
          <button onClick={() => setFilter('not_completed')}><RemoveDoneIcon  fontSize="small"/>Not Completed</button>
      </div>
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default HomePage;
