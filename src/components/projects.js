import React from "react";
import Project from "./project";
import wayneEnterprisesImage from "../assets/images/project-card-images/wayne-enterprises-card-image.jpg"
// import './App.scss';

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center title is-2">Projects</h2>
        <div className="row">
          <div className="col-md-6 my-3">
            <Project
              name="Wayne Enterprises"
              description="A fan-made website for the fictional conglomerate Wayne Enterprises"
              links={
                <span>
                  <a href="#">#css </a>
                  <a href="#">#html </a>
                  <a href="#">#js </a>
                  <a href="#">#bootsrap </a>
                </span>
              }
              footerLinks={
                <>
                 <a href="https://github.com/Mattds825/Wayne-Enterprises/blob/main/README.md" target="_blank" class="card-footer-item">
                    More Info
                  </a>
                  <a href="https://github.com/Mattds825/Wayne-Enterprises/tree/main" target="_blank" class="card-footer-item">
                    View on Github
                  </a>
                  <a href="https://mattds825.github.io/Wayne-Enterprises/" target="_blank" class="card-footer-item">
                    View Live
                  </a>
                </>
              }
              projectImage={wayneEnterprisesImage}
            />
          </div>
          <div className="col-md-6 my-3">
            <Project
              name="QuickBreathe"
              description="Description of project 2"
              links={
                <span>
                  <a href="#">#css </a>
                  <a href="#">#html </a>
                  <a href="#">#js </a>
                  <a href="#">#bootsrap </a>
                </span>
              }
              footerLinks={
                <>
                  <a href="#" class="card-footer-item">
                    More Info
                  </a>
                  <a href="#" class="card-footer-item">
                    View on Github
                  </a>
                  <a href="#" class="card-footer-item">
                    View Live
                  </a>
                </>
              }
            />
          </div>
          <div className="col-md-6 my-3">
            <Project
              name="JUSTTYPEFAST"
              description="Description of project 2"
              links={
                <span>
                  <a href="#">#css </a>
                  <a href="#">#html </a>
                  <a href="#">#js </a>
                  <a href="#">#bootsrap </a>
                </span>
              }
              footerLinks={
                <>
                  <a href="#" class="card-footer-item">
                    More Info
                  </a>
                  <a href="#" class="card-footer-item">
                    View on Github
                  </a>
                  <a href="#" class="card-footer-item">
                    View Live
                  </a>
                </>
              }
            />
          </div>
          <div className="col-md-6 my-3">
            <Project
              name="Old Portfolio"
              description="View my old portfolio with some legacy projects"
              links={
                <span>
                  <a href="#">#css </a>
                  <a href="#">#html </a>
                  <a href="#">#js </a>
                  <a href="#">#bootsrap </a>
                </span>
              }
              footerLinks={
                <>
                  <a href="https://github.com/Mattds825/Wayne-Enterprises/blob/main/README.md" class="card-footer-item">
                    More Info
                  </a>
                  <a href="https://github.com/Mattds825/Wayne-Enterprises/tree/main" class="card-footer-item">
                    View on Github
                  </a>
                  <a href="https://mattds825.github.io/Wayne-Enterprises/" class="card-footer-item">
                    View Live
                  </a>
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
