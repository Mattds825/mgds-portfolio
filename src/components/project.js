import React from 'react';
// import './App.scss';

function Project({ name, description }) {
  return (
    <div className="project card mb-4">
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Project;
