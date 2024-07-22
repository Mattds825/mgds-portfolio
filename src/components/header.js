import React from "react";
// import './App.scss';

function Header() {
  return (
    <section className="quote-section d-flex justify-content-center align-items-center vh-100">
      <div className="orange-box"></div>
      <div className="row">
        <div className="col-12">
          <div className="quote-box box text-center">
            <h1 id="quote-box-quote-text" className="title is-1">
              <em>Simplicity</em> is the <br />
              <span className="title-span">Ultimate</span>{" "}
              <strong>Sophistaction</strong>
            </h1>
            <p className="subtitle is-6 mt-5">- Leonerdo Da Vinci</p>
          </div>
        </div>
        <div
          className="col-12 text-center align-items-center 
                        justify-content-center mt-5"
        >
          <a
            href="#about"
            class="button is-black has-text-white-ter is-fullwidth"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
