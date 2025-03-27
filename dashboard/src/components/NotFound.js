import React from "react";
import Menu from "./Menu";
import '../index.css';

function NotFound() {
  return (
    <>
      <Menu />
      <h1 className="notFoundH1">404 Not Found</h1>
      <p className="notFoundP">Sorry, the page you looking for does not exist.</p>
    </>
  );
}

export default NotFound;
