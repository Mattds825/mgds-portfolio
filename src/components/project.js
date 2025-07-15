import React from "react";
// import './App.scss';

function Project({ name, description, links, footerLinks, projectImage }) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by2">
          <img className="project-image"
            src={projectImage}
            alt={name+" Devices Images"}
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{name}</p>
          </div>
        </div>

        <div class="content">
          {description}
          <br />
          {links}
        </div>
      </div>
      <footer class="card-footer">
        {footerLinks}
      </footer>
    </div>
  );
}

export default Project;
