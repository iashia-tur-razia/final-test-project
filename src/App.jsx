import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskProvider from './components/TaskContext';
import HomePage from './Pages/HomePage';
import AddTaskPage from './Pages/AddTaskPage';
import EditTaskPage from './Pages/EditTaskPage';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="app">
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddTaskPage />} />
            <Route path="/edit/:id" element={<EditTaskPage />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;
