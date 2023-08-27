import React, { useState } from "react";
import ReactDom from "react-dom";
import Modal from "react-modal";
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
      <button onClick={openModal}>Follow me!</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Follow me"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Follow Me!</h2>
        <button onClick={closeModal}>Close</button>
        <div>here should be links to my socials!</div>
      </Modal>
    </div>
  );
};
