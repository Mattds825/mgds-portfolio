import React from "react";
// import './App.scss';

function About() {
  return (
    <section
      id="about"
      className="d-flex justify-content-center align-items-center"
    >
      {/* <div className="block">
        <div className="columns is-multiline is-mobile">
          <div class="column is-one-third">
            <h2 className="title is-4">Matthew g. Da Silva</h2>
          </div>
          <div class="column is-two-thirds">
            <h2 className="subtitle is-4">| Creative Frontend Developer</h2>
          </div>
        </div>
        <div className="columns">
          <div class="column is-one-third">
            <figure class="image is-128x128">
              <img
                class="is-rounded"
                src="https://bulma.io/assets/images/placeholders/128x128.png"
              />
            </figure>
          </div>
          <div class="column is-two-thirds">
          <div className="box">
              <p className="text-start">
                I am an aspiring frontend developer with a passion for
                responsive design and user experience.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2 className="title is-3">Matthew G. Da Silva</h2>
          </div>
          <div className="col-6">
            <h2 className="subtitle is-4">Creative Frontend Developer</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="has-text-centered">
              <figure class="image is-128x128 is-inline-block-mobile">
                <img
                  class="is-rounded"
                  src="https://bulma.io/assets/images/placeholders/128x128.png"
                />
              </figure>
            </div>
          </div>
          <div
            className="col-md-6 text-center align-items-center 
                        justify-content-center mx-auto"
          >
            <p className="text-start">
              I am an aspiring frontend developer with a passion for responsive
              design and user experience.
            </p>
            <a href="#timeline" class="button is-small is-outlined mt-4">Curriculum Vitae</a>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-4 py-3">
            <h2 className="subtitle is-5">Currently Working with:</h2>
            <div className="box has-background-info-light has-text-primary-dark">
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
          </div>
          <div className="col-md-4 py-3">
            <h2 className="subtitle is-5">Currently Studying:</h2>
            <div className="box has-background-warning-light has-text-primary-dark">
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
                      Web Design
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-3">
            <h2 className="subtitle is-5">Experienced in:</h2>
            <div className="box has-background-success-light has-text-primary-dark">
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
          </div>
        </div>
        <div className="row mt-5">
          <div
            className="col  text-center align-items-center 
                        justify-content-center"
          >
            <a href="#timeline" class="button is-light">Timeline</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
