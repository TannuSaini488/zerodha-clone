import React from "react";

function Hero() {
  return (
    <div className="container-fluid px-5" id="supportHero">
      <div className="row pt-5 p-3"  id="supportWrapper1">
        <div className="d-flex justify-content-between">
          <h4>Support Portal</h4>
          <a href="">Track tickets</a>
        </div>
      </div>
      <div id="supportWrapper2" className="row p-3 d-flex justify-content-between">
        <div className="col-6 mb-5">
          <h2 className="fs-4 mb-4">Search for an answer or browse help topics to create a ticket</h2>
          <input placeholder="Eg. how do I activate F&O" />
          <br></br>
          <a className="px-2" href="">Track account opening</a>
          <a className="px-2" href="">Track segment activation</a>
          <a className="px-2" href="">Intraday margins </a>
          <br></br>
          <a className="px-2" href="">Kite user manual</a>
        </div>
        <div className="col-6 px-5">
          <h2 className="fs-4 mb-4">Featured</h2>
          <ol className="px-5">
            <li className="pb-3">
              <a href="">
                Exclusion of F&O contracts on 5 securities from May 27, 2025
              </a>
            </li>
            <li>
              <a href="">Rights Entitlements listing in March 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
