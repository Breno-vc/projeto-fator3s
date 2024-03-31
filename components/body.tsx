"use client";
import React, { useState } from "react";
import "./body.css";
import Link from "next/link";

const Body = () => {
  const [messageNumber, setMessageNumber] = useState(36);
  const [messageHover, setMessageHover] = useState(false);
  const handleMessageResponds = () => {
    /* LÓGICA PARA ALTERAR VALOR DE MENSAGENS*/
  };
  const handleMessageHover = () => {
    setMessageHover(true);
  };
  const removeMessageHover = () => {
    setMessageHover(false);
  };

  return (
    <React.Fragment>
      <article id="flex-body">
        <section role="title" aria-label="título da seção">
          <h1
            id="tituloH1"
            title="You should stop writing Dockerfiles today — Do this instead"
          >
            You should stop writing Dockerfiles today — Do this instead
          </h1>
        </section>
        <div id="code-container">
          <code>
            Using docker init to write Dockerfile and docker-compose configs
          </code>
        </div>
        <div id="info-container">
          <div id="publisher-container">
            <img
              id="publisher-img"
              src="images/publisher-image.jpg"
              alt="Akhilesh's picture"
            />
            <div id="publishers-hover"></div>
          </div>
          <div id="kpmg-container">
            <img
              id="kpmg-image"
              src="images/kpmg-image.jpg"
              alt="KPMG logo picture"
            />
            <div id="kpmg-hover"></div>
          </div>
          {/*Adicionar o modal depois*/}

          <section aria-label="Informações do Jornalista" id="publisher-info">
            <div id="name-link-container">
              <p id="publishers-name" aria-label="Nome do publicador">
                <a id="a-name">Akhilesh Mishra</a> <span id="dot"></span>
              </p>
              <Link href={""} id="follow-link">
                Follow
              </Link>
            </div>
            <div>
              <p id="published-text">
                Published in <a id="kpmg-link">KPMG UK Engineering</a>{" "}
                <span id="dot-5min" /> 5 min read <span id="dot-feb" /> Feb
                8,2024
              </p>
            </div>
          </section>
          {/* DEPOIS LEMBRAR DE POR OS ELEMENTOS DO TEXTO PUBLISHED DENTRO DE UMA DIV-FLEX, POR 2 DIVS DPS DO TEXTO E AS SPANS COM OS PONTOS, IGUAL A DO FOLLOW */}
        </div>
        <div id="icones-body">
          <div id="start-icons-flex">
            <div id="clap-container">
              <img
                id="clap-icon"
                src="icons/body-icons/clap-icon.svg"
                alt="clapping hands icon"
              />
              <button id="clap-button">5.1K</button>
            </div>
            <button
              id="message-icon-container"
              onMouseEnter={handleMessageHover}
              onMouseLeave={removeMessageHover}
              className={messageHover ? "hovered" : ""}
            >
              <img
                id="message-icon"
                src="icons/body-icons/message_icon.svg"
                alt="message icon"
              />
              <p id="message-number">{messageNumber}</p>
            </button>
          </div>
          <div id="end-icons-flex">
            <button id="save-icon-button">
              <img src="icons/body-icons/save_icon.svg" alt="save post icon" />
            </button>
            <button id="play-icon-button">
              <img src="icons/body-icons/play_icon.svg" alt="play audio icon" />
            </button>
            <button id="share-icon-button">
              <img
                src="icons/body-icons/share_icon.svg"
                alt="share this post icon"
              />
            </button>
          </div>
        </div>
        <picture id="robot-img">
          <img src="images/imagem1.webp" alt="Foto do robô zowi" />
        </picture>
        <section>
          <p id="photo-by-text">
            Photo by{" "}
            <a id="anchor-photo" href="">
              Everyday basics
            </a>{" "}
            on{" "}
            <a id="anchor-photo" href="">
              Unsplash
            </a>
          </p>
        </section>
        <p id="p1">
          Are you one of those who find writing
          <code id="paragraph-code">Dockerfiles</code>, and
          <code id="paragraph-code">docker-compose.yml</code> files painful?
        </p>{" "}
        <p id="p2">At least I never enjoyed it. </p>
        <p id="p3">
          {" "}
          I always wondered if I was following the best practices, and not
          introducing security vulnerabilities unknowingly while writing the{" "}
          <code id="paragraph-code">Dockerfile</code> ,{" "}
          <code id="paragraph-code">docker-compose</code> config files.
        </p>
        <p id="p4">
          Well, I won’t have to worry about it anymore, thanks to the good
          people at Docker who put Generative AI to better use without making
          too much noise about it.
        </p>{" "}
        <p id="p5">
          {" "}
          They created a CLI utility tool —
          <code id="docker-init-code"> docker init</code>
        </p>
        <h2 title="Introducing docker init">Introducing docker init</h2>
        <p id="p6">
          Docker launched the general availability of{" "}
          <code id="paragraph-code">
            <a href="" id="docker-anchor">
              docker init
            </a>
          </code>{" "}
          a few days back. I have tried it, and I found it very useful and I
          cannot wait to start using it in my day-to-day life.
        </p>
        <h2 title="What is docker init?">What is docker init?</h2>
        <p id="p7">
          <code id="docker-init-code"> docker init</code>is a command-line
          utility that helps in the initialization of Docker resources within a
          project. It creates Dockerfiles, Compose files, and
          <code id="paragraph-code">.dockerignore</code>files based on the
          project’s requirements.
        </p>
        <p id="p8">
          This simplifies the process of configuring Docker for your project,
          saving time and reducing complexity.
        </p>
        <div id="pseudo-leftBar1">
          <p id="ita-paragraph">
            Latest version of <code id="ita-code">docker init</code> supports
            Go, Python, Node.js, Rust, ASP.NET, PHP, and Java. It is available
            with Docker Desktop.
          </p>
        </div>
        <h2>How to use docker init?</h2>
      </article>
    </React.Fragment>
  );
};

export default Body;
