import React from "react";
import "./CreateTicket";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mb-5">
        <h1 className="fs-3 m-2 text-muted">
          To create a ticket, select a relevant topic
        </h1>
        <div className="col-4 p-4 mt-4 mb-4">
          <p className="fs-5">
            <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </p>
          <a className="lh-lg text-decoration-none m-4" href="">
            Resident individual
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Minor
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Non Resident Indian (NRI)
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Company, Partnership, HUF and LLP
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Glossary
          </a>
          <br></br>
        </div>
        <div className="col-4 p-4 mt-4 mb-4">
          <p className="fs-5">
            <i class="fa fa-user-o" aria-hidden="true"></i> Your Zerodha Account
          </p>
          <a className="lh-lg text-decoration-none m-4" href="">
            Your Profile
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Account modification
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Client Master Report(CMR)
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Depository Participant(DP)
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Nomination
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Transfer and conversion of securities
          </a>
          <br></br>
        </div>
        <div className="col-4 p-4 mt-4 mb-4">
          <p className="fs-5">
            <i class="fa fa-bar-chart" aria-hidden="true"></i> Kite
          </p>
          <a className="lh-lg text-decoration-none m-4" href="">
            IPO
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Trading FAQs
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Margin Trading Facility (MTF) and Margins
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Charts and orders
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Alerts and Nudges
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            General
          </a>
          <br></br>
        </div>
        <div className="col-4 p-4 mb-4">
          <p className="fs-5">
            <i class="fa fa-window-maximize" aria-hidden="true"></i> Funds
          </p>
          <a className="lh-lg text-decoration-none m-4" href="">
            Add money
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Withdraw money
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Add bank accounts
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            eMandates
          </a>
          <br></br>
        </div>
        <div className="col-4 p-4 mb-4">
          <p className="fs-5">
            {" "}
            <i class="fa fa-contao" aria-hidden="true"></i> Console
          </p>
          <a className="lh-lg text-decoration-none m-4" href="">
            Portfolio
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Corporate actions
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Funds statement
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Reports
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Profile
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Segments
          </a>
          <br></br>
        </div>
        <div className="col-4 p-4 mb-4">
          <p className="fs-5">
            <i class="fa fa-circle-thin" aria-hidden="true"></i> Coin
          </p>
          <a className="lh-lg text-decoration-none m-4" href="">
            Understanding mutual funds and Coin
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Coin app
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Coin web
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            Transactions and reports
          </a>
          <br></br>
          <a className="lh-lg text-decoration-none m-4" href="">
            National Pension Scheme (NPS)
          </a>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
