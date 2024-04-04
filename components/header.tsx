"use client";
import React, { useState, useEffect } from "react";
import "./header.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [telaMedia, setTelaMedia] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setTelaMedia(window.innerWidth < 881);
    };

    handleResize();

    const handleResizeListener = () => {
      handleResize();
    };

    window.addEventListener("resize", handleResizeListener);

    return () => {
      window.removeEventListener("resize", handleResizeListener);
    };
  }, []);
  return (
    <React.Fragment>
      {telaMedia ? MiddleScreen() : LargeScreen()}
    </React.Fragment>
  );
};

export default Header;

const MiddleScreen = () => {
  const [hoverArrow, setHoverArrow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  //Lógica da aplicação do hover no elemento openInApp :
  const handleOpenEnter = () => {
    const divOpen = document.getElementById("upperOpen");
    if (divOpen) {
      divOpen.classList.add("hovered");
    }
  };
  const handleOpenLeave = () => {
    const divOpen = document.getElementById("upperOpen");
    if (divOpen) {
      divOpen.classList.remove("hovered");
    }
  };

  return (
    <header className="header">
      <nav id="under_navBar">
        <div id="divNav_start">
          <img
            id="underImg_logo"
            src="icons/header-icons/svg-logo-medium.svg"
            width={145}
            alt="Logomarca da Medium"
          />
          <div className="underSearch_icon_container">
            <svg id="underMagnifying_icon"></svg>
            <input
              type="text"
              className="underSearchInput"
              alt="Barra de Pesquisa"
              placeholder="Search"
            />
            <div
              id="underModalSearch"
              onMouseEnter={handleMouseArrow}
              onMouseLeave={removeMouseArrow}
              className={hoverArrow ? "hovered" : ""}
            >
              <div id="underConteudo_modal">
                <div id="underSetaModal"></div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  id="underCompass_icon"
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
          <div
            id="underWriteLink_container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={isHovered ? "hovered" : ""}
          >
            <svg id="underWrite_icon" />
            <Link href={"#"} id="underWriteLink">
              Write
            </Link>
          </div>

          <svg id="underMagnifying_icon"></svg>
          <div id="underContainer_userIcon">
            <img
              id="user_icon"
              src="/images/user_img.png"
              alt="Ícone do usuário"
            />
            <div id="img_hover"></div>
          </div>

          <div className="upperNav_end">
            <div
              id="upperOpen"
              onMouseEnter={handleOpenEnter}
              onMouseLeave={handleOpenLeave}
            >
              <p id="openInApp">Open in app</p>
              <svg id="upperArrow_icon" />
            </div>
            <button id="upperSignUpBtn">Sign up</button>
            <a href="#" id="upperSignInText">
              Sign in
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

const LargeScreen = () => {
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
                <div id="setaModal"></div>
                <svg
                  id="compass_icon"
                  viewBox="0 0 24 24"
                  fill="none"
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
  );
};
