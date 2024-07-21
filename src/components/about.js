import React from "react";
// import './App.scss';

function About() {
  return (
    <section
      id="about"
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2 className="title is-4">Matthew g. Da Silva</h2>
          </div>
          <div className="col-6">
            <h2 className="subtitle is-4">| Creative Frontend Developer</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box">
              <p className="text-start">
                I am an aspiring frontend developer with a passion for
                responsive design and user experience.
              </p>
            </div>
          </div>
          <div className="col-md-8 text-center align-items-center 
                        justify-content-center mx-auto">
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
