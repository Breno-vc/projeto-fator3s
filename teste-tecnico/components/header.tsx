"use client";
import React, { useState } from "react";
import "../components_css/navBar.css";
import Link from "next/link";
const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverArrow, setHoverArrow] = useState(false);
  const handleMouseArrow = () => {
    setHoverArrow(true);
  };
  const removeMouseArrow = () => {
    setHoverArrow(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <React.Fragment>
      <header className="header">
        <nav id="navBar">
          <div className="nav_start">
            <img
              id="img_logo"
              src="icons/header-icons/svg-logo-medium.svg"
              width={145}
              alt="Logomarca da Medium"
            />

            <div className="search_icon_container">
              <svg id="magnifying_icon"></svg>
              <input
                type="text"
                className="searchInput"
                alt="Barra de Pesquisa"
                placeholder="Search"
              />
              <div
                id="modalSearch"
                onMouseEnter={handleMouseArrow}
                onMouseLeave={removeMouseArrow}
                className={hoverArrow ? "hovered" : ""}
              >
                <div id="conteudoModalSearch">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    id="compass_icon"
                    width="24px"
                    height="24px"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10.5"
                      stroke="currentColor"
                    ></circle>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.08 6.17l-.14.99-.99 6.63-.03.25-.22.12-5.9 3.2-.88.47.14-1 .99-6.63.03-.24.22-.12 5.9-3.2.88-.47zm-6.16 4.98L9.2 16l4.3-2.34-3.58-2.51zm4.16 1.7l-3.59-2.52L14.8 8l-.72 4.84z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <p id="modalText">Explore topics</p>
                </div>
                <div id="upArrow_container">
                  <svg id="upArrow_icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="nav_end">
            <div
              id="writeLink_container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={isHovered ? "hovered" : ""}
            >
              <svg id="write_icon" />
              <Link href={"#"} id="writeLink">
                Write
              </Link>
            </div>
            <button id="signUpBtn">Sign up</button>
            <a href="#" id="signInText">
              Sign in
            </a>
            <div id="container_userIcon">
              <img
                id="user_icon"
                src="/images/user_img.png"
                alt="Ícone do usuário"
              />
              <div id="img_hover"></div>
            </div>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
