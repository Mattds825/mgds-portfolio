import React, { useEffect } from "react";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Timeline from "./components/timeline";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "bulma/css/bulma.min.css";
import "animate.css";
import "./App.scss";

function App() {
  useEffect(() => {
    const animateCSS = (element, animation, prefix = "animate__") =>
      // We create a Promise and return it
      new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
          event.stopPropagation();
          node.classList.remove(`${prefix}animated`, animationName);
          resolve("Animation ended");
        }

        node.addEventListener("animationend", handleAnimationEnd, {
          once: true,
        });
      });

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const windowHeight = window.innerHeight;
      const scrollPercent = scrollTop / windowHeight;

      const startColor = [0, 0, 0]; // Dark Gray
      const endColor = [255, 255, 255]; // White

      var hasAnimatedScreen = false;

      if (scrollPercent > 0.8 && scrollPercent < 0.9) {
        if (hasAnimatedScreen == false) {
          const fadeTexts =
            document.getElementsByClassName("animated-text-fade");
          for (let i = 0; i < fadeTexts.length; i++) {
            // animateCSS(".animated-text-fade", "fadeInLeft");
          }
          // animateCSS(".animated-text-fade", "fadeInLeft");
          // animateCSS(".animated-text-bounce", "bounce");
          // animateCSS(".animated-text-appear", "fadeIn");
          hasAnimatedScreen = true;
        }
      }

      const newColor = startColor.map((start, i) => {
        if (scrollPercent > 1.8) {
          return 0;
        }
        return Math.round(start + (endColor[i] - start) * scrollPercent);
      });

      document.body.style.backgroundColor = `rgb(${newColor.join(",")})`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
        <About />
      {/* <AnimationOnScroll animateIn="animate__fadeIn">
      </AnimationOnScroll> */}
      <AnimationOnScroll animateIn="animate__fadeIn">
        <Timeline />
      </AnimationOnScroll>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
