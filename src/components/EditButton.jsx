import React from 'react';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import './EditButton.css';

const EditButton = ({ taskId }) => { 
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/edit/${taskId}`); 
  };

  return (
    <button type="button" onClick={handleClick} className="edit-button">
      <EditIcon fontSize="small" /> Edit Task
    </button>
  );
};

export default EditButton;
