import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import brand from "../asset/brand.svg";

function Navbar() {
  let location = useLocation();
  const [trigger, setColor] = useState(false);
  const [babi, ucul] = useState(false);
  const [toge, setToge] = useState(false);

  function togeClick() {
    setToge(true);
  }

  function changeBackground() {
    if (window.scrollY >= 64) {
      setColor(true);
    } else if (window.scrollY >= 400) {
      ucul(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={
        trigger
          ? "navigation bg-scroll"
          : babi
          ? "navigation light"
          : "navigation"
      }
    >
      <nav class="navbar navbar-expand-lg navbar-dark p-0">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={brand} alt="" width="35" height="29"></img>
            Beta 1.2
          </a>
          <button
            onClick={togeClick}
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class={
              toge
                ? "collapse navbar-collapse bg-toge"
                : "collapse navbar-collapse"
            }
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li class="nav-item">
                <HashLink
                  exact
                  smoth
                  to="/#hero"
                  className={
                    `${location.pathname}${location.hash}` === "/#hero"
                      ? "active"
                      : ""
                  }
                  style={{
                    "text-decoration": "none",
                    color: "#fff",
                    padding: "10px 8px",
                    "font-size": "1.25rem",
                  }}
                >
                  Home
                </HashLink>
              </li>
              <li class="nav-item">
                <HashLink
                  exact
                  smoth
                  to="/#riwayat"
                  className={
                    `${location.pathname}${location.hash}` === "/#riwayat"
                      ? "active"
                      : ""
                  }
                  style={{
                    "text-decoration": "none",
                    color: "#fff",
                    padding: "10px 8px",
                    "font-size": "1.25rem",
                  }}
                >
                  About
                </HashLink>
              </li>
              <li class="nav-item">
                <HashLink
                  exact
                  smoth
                  to="/#myproject"
                  className={
                    `${location.pathname}${location.hash}` === "/#myproject"
                      ? "active"
                      : ""
                  }
                  style={{
                    "text-decoration": "none",
                    color: "#fff",
                    padding: "10px 8px",
                    "font-size": "1.25rem",
                  }}
                >
                  My Project
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
