import React from 'react';
import Project from './project';
// import './App.scss';

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center title is-2">Projects</h2>
        <div className="row">
          <div className="col-md-6">
            <Project name="Project 1" description="Description of project 1" />
          </div>
          <div className="col-md-6">
            <Project name="Project 2" description="Description of project 2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
