"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  valorInicial: number | string;
  className: string;
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
      <Image
        src={"/icons/body-icons/message_icon.svg"}
        alt="message icon"
        className="message-icon"
        width={25}
        height={25}
      />

      <p className={props.className}>{messageNumber}</p>
    </button>
  );
};

export default MessageIcon;
