import React from "react";
import { useGlobalContext } from "../../context";

const Randevu = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>Randevu Al</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          
        </button>
      </div>
    </div>
  );
};

export default Randevu;
