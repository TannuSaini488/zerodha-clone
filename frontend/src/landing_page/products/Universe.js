import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="pt-5 fs-2">The Zerodha Universe</h1>
        <p className="p-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted mt-3">
            Thematic investing platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{ width: "40%" }} src="media/images/streakLogo.png" />
          <p className="text-small text-muted mt-3">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{ width: "75%" }} src="media/images/sensibullLogo.svg" />
          <p className="text-small text-muted mt-3">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            style={{ width: "40%" }}
            src="media/images/zerodhaFundhouse.png"
          />
          <p className="text-small text-muted mt-3">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" />
          <p className="text-small text-muted mt-3">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{ width: "25%" }} src="media/images/dittoLogo.png" />
          <p className="text-small text-muted mt-3" mt-3>
            Insurance
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mt-4 mb-4"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
