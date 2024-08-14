import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import profileImage from '../assets/images/profile-image.jpeg';
import cvDoc from '../assets/documents/matthew-cv-2024.pdf'
import statementDoc from '../assets/documents/matthew-personal-statement-2024.pdf'
// import './App.scss';

function About() {
  return (
    <section
      id="about"
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container">
        {/* Name and info */}
        <div className="row">
          <div className="col-6">
            <AnimationOnScroll animateIn="animate__fadeIn">
              <h2 className="title is-3">Matthew G. Da Silva</h2>
            </AnimationOnScroll>
          </div>
          <div className="col-6">
            <AnimationOnScroll animateIn="animate__bounce">
              <h2 className="subtitle is-4">Creative Frontend Developer</h2>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="has-text-centered">
              <figure class="image is-128x128 is-inline-block-mobile">
                <img
                  class="is-rounded"
                  src={profileImage}
                />
              </figure>
            </div>
          </div>
          <div
            className="col-md-6 text-center align-items-center 
                        justify-content-center mx-auto"
          >
            <p className="text-start ">
              I am an aspiring frontend developer with a passion for
              design and user experience.
            </p>
            <a href="https://github.com/Mattds825" target="_blank" class="button is-small is-outlined mt-4 m-2">
              GitHub
            </a>
            <a href={cvDoc} target="_blank" class="button is-small is-outlined mt-4 m-2">
              Curriculum Vitae
            </a>
            <a href={statementDoc} target="_blank" class="button is-small is-outlined mt-4 m-2">
              Personal Statement
            </a>
          </div>
        </div>
        {/* /.Name and info */}
        <div className="row justify-content-center py-3">
          <div className="col-6">
            <hr></hr>
          </div>
        </div>
        {/* Skill And Technology */}
        <div className="row pt-5">
          <AnimationOnScroll animateIn="animate__fadeIn">
            <h2 className="title is-4">Skills & Technologies</h2>
          </AnimationOnScroll>
          <div className="col-md-4 py-3">
            <AnimationOnScroll animateIn="animate__bounce">
              <div className="box has-background-success-light has-text-primary-dark">
                <p className="subtitle is-6 has-text-success">
                  Experienced with:
                </p>
                <div className="grid  is-col-min-3">
                  <div className="cell">
                    <button class="button is-small is-responsive is-success is-outlined">
                      App Dev.
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-success is-outlined">
                      Flutter
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-success is-outlined">
                      Dart
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-success is-outlined">
                      Javascript
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-success is-outlined">
                      Java
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-success is-outlined">
                      SQL
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-success is-outlined">
                      mySQL
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-success is-outlined">
                      Firebase
                    </button>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="col-md-4 py-3">
            <AnimationOnScroll animateIn="animate__bounce">
              <div className="box has-background-info-light has-text-primary-dark">
                <p className="subtitle is-6 has-text-info">Working On:</p>
                <div className="grid is-col-min-3">
                  <div className="cell">
                    <button class="button is-small is-responsive is-info is-outlined">
                      HTML
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-info is-outlined">
                      SCSS
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-info is-outlined">
                      Javascript
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-info is-outlined">
                      React Js
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-info is-outlined">
                      Next Js
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-info is-outlined">
                      Bootsrap
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-info is-outlined">
                      Bulma
                    </button>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          <div className="col-md-4 py-3">
            <AnimationOnScroll animateIn="animate__bounce">
              <div className="box has-background-warning-light has-text-primary-dark">
                <p className="subtitle is-6 has-text-warning">Studying:</p>
                <div className="grid  is-col-min-3">
                  <div className="cell">
                    <button class="button is-small is-responsive is-warning is-outlined">
                      Flask
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-warning is-outlined">
                      Django
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-warning is-outlined">
                      Noje.js
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-warning is-outlined">
                      Jquery
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-warning is-outlined">
                      Jest
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-warning is-outlined">
                      Mongo DB
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-warning is-outlined">
                      Flask
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-warning is-outlined">
                      Web Design
                    </button>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
          
        </div>
        {/* /.Skill And Technology */}

        {/* Interests and Hobbies */}
        <div className="row pt-5">
          <AnimationOnScroll animateIn="animate__fadeIn">
            <h2 className="title is-4">Interests and Hobbies</h2>
          </AnimationOnScroll>
          <div className="col py-3">
            <AnimationOnScroll animateIn="animate__zoomIn">
              <div className="box has-background-link-light has-text-primary-dark">
                <div className="grid gap-1">
                  <div className="cell">
                    <button class="button is-small is-responsive is-link is-outlined">
                      Horror Movies
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-link is-outlined">
                      Music Production
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-link is-outlined">
                      Painting and Arts
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-link is-outlined">
                      Video Editing
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-link is-outlined">
                      DC Comics
                    </button>
                  </div>
                  <div className="cell">
                    <button class="button is-small is-responsive is-link is-outlined">
                      Twin Peaks
                    </button>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
        {/* /.Interests and Hobbies */}

        <div className="row mt-5">
          <div
            className="col  text-center align-items-center 
                        justify-content-center"
          >
            {/* <a href="#timeline" class="button is-light mx-2">
              Timeline
            </a> */}
            <a href="#projects" class="button is-light mx-2">
              Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
