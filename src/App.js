import React, { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    var loader;

     // Set a timeout for the duration of the GIF (e.g., 3 seconds)
     const gifDuration = 1500; // Replace with your GIF duration in milliseconds
     const timeout = setTimeout(() => {
       setIsLoading(false);
     }, gifDuration);

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
        if (scrollPercent > 1.7) {
          // return 0;
          var newPercentage = 1 - (scrollPercent - 1.7) / (1.9 - 1.7);

          return Math.round(start + (endColor[i] - start) * newPercentage);
        }
        return Math.round(start + (endColor[i] - start) * scrollPercent);
      });

      document.body.style.backgroundColor = `rgb(${newColor.join(",")})`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div id="loader"></div>
      ) : (
        <div id="content">
          <Header />
          <About />
          {/* <AnimationOnScroll animateIn="animate__fadeIn">
        </AnimationOnScroll> */}
          {/* <AnimationOnScroll animateIn="animate__fadeIn">
            <Timeline />
          </AnimationOnScroll> */}
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
