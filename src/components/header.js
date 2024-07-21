import React from "react";
// import './App.scss';

function Header() {
  return (
    <section className="quote-section d-flex justify-content-center align-items-center vh-100">
      <div className="box text-center">
        <h1 className="title is-1 text-white"><em>Simplicity</em> is the <br/><span className="title-span">Ultimate</span> <strong>Sophistaction</strong></h1>
        <p className="subtitle is-6 mt-5">- Leonerdo Da Vinci</p>
      </div>
    </section>
  );
}

export default Header;
