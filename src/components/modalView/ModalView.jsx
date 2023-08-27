import React, { useState } from "react";
import ReactDom from "react-dom";
import Modal from "react-modal";
import { Button } from "../../hooks/button/Button";
import "./ModalView.css";

Modal.setAppElement("#root");

export const ModalView = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button onClick={openModal}>Stalk Me!</Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Follow me"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Follow Me!</h2>
        
        <div>here should be links to my socials!</div>
        <Button onClick={closeModal}>Close</Button>
      </Modal>
    </div>
  );
};
