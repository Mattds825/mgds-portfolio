import React from "react";
// import './App.scss';

function Project({ name, description }) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/assets/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Project Name</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">
          More Info
        </a>
        <a href="#" class="card-footer-item">
          View on Github
        </a>
        <a href="#" class="card-footer-item">
          View Live
        </a>
      </footer>
    </div>
  );
}

export default Project;
