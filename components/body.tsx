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
      <div id="flex-body">
        <section role="title" aria-label="título da seção">
          <h1 id="tituloH1">
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
            <p id="publishers-name" aria-label="Nome do publicador">
              <a id="a-name">Akhilesh Mishra</a> <span id="dot"></span>
            </p>
            <Link href={""} id="follow-link">
              Follow
            </Link>
            <p id="published-text">
              Published in <a id="kpmg-link">KPMG UK Engineering</a>{" "}
              <span id="dot-5min" /> 5 min read <span id="dot-feb" /> Feb 8,2024
            </p>
          </section>
          {/* DEPOIS LEMBRAR DE POR OS ELEMENTOS DO TEXTO PUBLISHED DENTRO DE UMA DIV-FLEX, POR 2 DIVS DPS DO TEXTO E AS SPANS COM OS PONTOS, IGUAL A DO FOLLOW */}
        </div>
        <div id="icones-body">
          <img
            id="clap-icon"
            src="icons/body-icons/clap-icon.svg"
            alt="clapping hands icon"
          />
          <button id="clap-button">5.1K</button>
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
        <picture id="robot-img">
          <img src="images/imagem1.webp" alt="Foto do robô zowi" />
        </picture>
      </div>
    </React.Fragment>
  );
};

export default Body;
