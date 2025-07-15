import React from "react";
import Project from "./project";
import wayneEnterprisesImage from "../assets/images/project-card-images/wayne-enterprises-card-image.jpg";
import justTypeFastImage from "../assets/images/project-card-images/just-type-fast-screenshot.jpg";
import keyboardSequencerImg from "../assets/images/project-card-images/keyboard-sequencer-screenshot.jpg";
import dailysCardImg from "../assets/images/project-card-images/dailys-card-image.png";
import oldPortfolioImage from "../assets/images/project-card-images/old-portfolio-screenshot.jpg";
import qwrtSeq20Image from "../assets/images/project-card-images/qwrt-seq-20-card-image.jpg";
import favEmojiImage from "../assets/images/project-card-images/fav-emoji-card-image.jpg";
import communityToolshedImage from "../assets/images/project-card-images/community-toolshed-card-image.png";
// import './App.scss';

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center title is-2">Projects</h2>
        <h4 className="text-center subtitle is-6">
          Some Recent Project I have been working on
        </h4>
        <div className="row">
          <div className="col-md-6 my-3">
            <Project
              name="Community Toolshed"
              description="The Community Toolshed is a platform that allows users to subscribe and rent tools and party items on a daily basis. Subscribers pay an annual fee to gain access to a shared inventory of tools and reusable party supplies, promoting sustainability, affordability, and community resource sharing."
              links={
                <span>
                  <a href="#">#course project </a>
                  <a href="#">#fullstack </a>
                  <a href="#">#e-commerce (Stripe) </a>
                  <a href="#">#django </a>
                  <a href="#">#postgreSQL </a>
                  <a href="#">#admin dashboard </a>
                </span>
              }
              footerLinks={
                <>
                  <a
                    href="https://github.com/Mattds825/community-toolshed-store/blob/main/README.md"
                    target="_blank"
                    class="card-footer-item"
                  >
                    More Info
                  </a>
                  <a
                    href="https://github.com/Mattds825/community-toolshed-store"
                    target="_blank"
                    class="card-footer-item"
                  >
                    View on Github
                  </a>
                  <a
                    href="https://ci-community-toolshed-afafcfe7f3c4.herokuapp.com/"
                    target="_blank"
                    class="card-footer-item"
                  >
                    View Live
                  </a>
                </>
              }
              projectImage={communityToolshedImage}
            />
          </div>
          <div className="col-md-6 my-3">
            <Project
              name="Dailys Habit Tracker"
              description="A habit tracker for your daily commitments to help you keep on top of your game. Dailys combines a sleek interface with a social component to make tracking your habit as easy and enjoyable as possible."
              links={
                <span>
                  <a href="#">#fullstack </a>
                  <a href="#">#django </a>
                  <a href="#">#python </a>
                  <a href="#">#postgreSQL </a>
                </span>
              }
              footerLinks={
                <>
                  <a
                    href="https://github.com/Mattds825/dailys-habit-tracker/blob/main/README.md"
                    target="_blank"
                    class="card-footer-item"
                  >
                    More Info
                  </a>
                  <a
                    href="https://github.com/Mattds825/dailys-habit-tracker"
                    target="_blank"
                    class="card-footer-item"
                  >
                    View on Github
                  </a>
                  <a href="https://dailys-habit-tracker-e30835973139.herokuapp.com/" class="card-footer-item">
                    View Live
                  </a>
                </>
              }
              projectImage={dailysCardImg}
            />
          </div>
          <div className="col-md-6 my-3">
            <Project
              name="Wayne Enterprises"
              description="A fan-made website for the fictional conglomerate Wayne Enterprises"
              links={
                <span>
                  <a href="#">#css </a>
                  <a href="#">#html </a>
                  <a href="#">#js </a>
                  <a href="#">#bootstrap </a>
                </span>
              }
              footerLinks={
                <>
                  <a
                    href="https://github.com/Mattds825/Wayne-Enterprises/blob/main/README.md"
                    target="_blank"
                    class="card-footer-item"
                  >
                    More Info
                  </a>
                  <a
                    href="https://github.com/Mattds825/Wayne-Enterprises/tree/main"
                    target="_blank"
                    class="card-footer-item"
                  >
                    View on Github
                  </a>
                  <a
                    href="https://mattds825.github.io/Wayne-Enterprises/"
                    target="_blank"
                    class="card-footer-item"
                  >
                    View Live
                  </a>
                </>
              }
              projectImage={wayneEnterprisesImage}
            />
          </div>
          <div className="col-md-6 my-3">
            <Project
              name="JS Keyboard Sequencer"
              description="A 16step sequencer that you can play with your keybaord"
              links={
                <span>
                  <a href="#">#css </a>
                  <a href="#">#html </a>
                  <a href="#">#js </a>
                  <a href="#">#tone.js </a>
                </span>
              }
              footerLinks={
                <>
                  <a
                    href="https://github.com/Mattds825/keyboard-step-sequencer"
                    target="_blank"
                    class="card-footer-item"
                  >
                    View on Github
                  </a>
                  <a href="#" class="card-footer-item">
                    View Live
                  </a>
                </>
              }
              projectImage={keyboardSequencerImg}
            />
          </div>
          <div className="col-md-6 my-3">
            <Project
              name="JUSTTYPEFAST"
              description="An 8-bit arcade style typing test game"
              links={
                <span>
                  <a href="#">#css </a>
                  <a href="#">#html </a>
                  <a href="#">#js </a>
                  <a href="#">#jQuery </a>
                </span>
              }
              footerLinks={
                <>
                  <a
                    href="https://github.com/Mattds825/just-type-fast-js-prototype"
                    target="_blank"
                    class="card-footer-item"
                  >
                    View on Github
                  </a>
                  <a
                    href="https://mattds825.github.io/just-type-fast-js-prototype/"
                    target="_blank"
                    class="card-footer-item"
                  >
                    View Live
                  </a>
                </>
              }
              projectImage={justTypeFastImage}
            />
          </div>
          <div className="col-md-6 my-3">
            <Project
              name="QWRT-SEQ-20"
              description="An responsive 16step sequencer that you can play with your keybaord with advanced sequencing and editing features"
              links={
                <span>
                  <a href="#">#css </a>
                  <a href="#">#html </a>
                  <a href="#">#js </a>
                  <a href="#">#ToneJs </a>
                </span>
              }
              footerLinks={
                <>
                  <a
                    href="https://github.com/Mattds825/qwrt-seq-20"
                    target="_blank"
                    class="card-footer-item"
                  >
                    View on Github
                  </a>
                  <a
                    href="https://mattds825.github.io/qwrt-seq-20/"
                    target="_blank"
                    class="card-footer-item"
                  >
                    View Live
                  </a>
                </>
              }
              projectImage={qwrtSeq20Image}
            />
          </div>
          <div className="col-md-6 my-3">
            <Project
              name="Fav Emoji Generator"
              description="This is a intuitive applet that can be used to generate a quick file set of favicon icons with emojis"
              links={
                <span>
                  <a href="#">#ReactJs </a>
                  <a href="#">#Tailwind Css </a>
                </span>
              }
              footerLinks={
                <>
                  <a
                    href="https://github.com/Mattds825/fav-emoji-generator/"
                    target="_blank"
                    class="card-footer-item"
                  >
                    View on Github
                  </a>
                  <a
                    href="https://mattds825.github.io/fav-emoji-generator/"
                    target="_blank"
                    class="card-footer-item"
                  >
                    View Live
                  </a>
                </>
              }
              projectImage={favEmojiImage}
            />
          </div>
          <div className="col-md-6 my-3">
            <Project
              name="Old Portfolio"
              description="View my old portfolio with some legacy projects"
              links={
                <span>
                  <a href="#">#flutter </a>
                  <a href="#">#dart </a>
                </span>
              }
              footerLinks={
                <>
                  <a
                    href="https://portfolio-5ecbc.web.app/#/"
                    target="_blank"
                    class="card-footer-item"
                  >
                    View Live
                  </a>
                </>
              }
              projectImage={oldPortfolioImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
