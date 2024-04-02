"use client";
import React, { useState } from "react";

interface Props {
  valorInicial: number | string;
}

const MessageIcon = (props: Props) => {
  const [messageNumber, setMessageNumber] = useState(props.valorInicial || "");
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
  );
};

export default MessageIcon;
