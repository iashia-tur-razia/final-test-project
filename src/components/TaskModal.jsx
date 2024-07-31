// import React from 'react';
// import './TaskModal.css';

// const TaskModal = ({ task, onClose }) => {
//   return (
//     <div className="task-modal">
//       <div className="task-modal-content">
//         <h2>{task.title}</h2>
//         <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default TaskModal;
import React from 'react';
import './TaskModal.css';

const TaskModal = ({ task, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{task.title}</h2>
        <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TaskModal;
