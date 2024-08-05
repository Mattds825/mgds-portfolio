import React from "react";
// import './App.scss';

function Project({ name, description, links, footerLinks, projectImage }) {
  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by2">
          <img className="prject-image"
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
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
      <footer class="card-footer">
        {footerLinks}
      </footer>
    </div>
  );
}

export default Project;
