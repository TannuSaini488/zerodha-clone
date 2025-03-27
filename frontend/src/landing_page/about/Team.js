import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row pt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>
      <div className="row text-muted p-5 fs-6" style={{ lineHeight: "2" }}>
        <div className="col-6 p-5 text-center">
          <img style={{width: "55%", borderRadius: "100%"}} src="media/images/nithinKamath.jpg" />
          <h4 className="mt-2">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on {" "}
            <a style={{ textDecoration: "none" }} href="">
              HomePage {" "}
            </a>
            /{" "}
            <a style={{ textDecoration: "none" }} href="">
              TradingQ&A {" "}
            </a>
            /{" "}
            <a style={{ textDecoration: "none" }} href="">
              Twitter {" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
