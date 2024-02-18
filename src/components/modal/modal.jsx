import React from "react";
import styled from "styled-components";

function Modal({ isOpen, children, closeModal }) {
  return (
    <div
      style={{
        display: isOpen ? "block" : "none",
      }}
    >
      <Background />

      <ModalContainer>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <ModalCloseBtn onClick={closeModal}>X</ModalCloseBtn>
        </div>
        <ContentContainer>{children}</ContentContainer>
      </ModalContainer>
    </div>
  );
}

export default Modal;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
`;

const ModalContainer = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  max-width: 100%;
  max-height: 90%;
  overflow-y: auto;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 10px 15px 10px;
`;

const ModalCloseBtn = styled.button`
  /* border: 1px solid red; */
  font-size: 20px;
  padding: 5px 5px 10px 20px;
  border-radius: 5px;
  text-align: end;
`;

const ContentContainer = styled.div`
  /* border: 1px solid red; */
  padding-top: 10px 5px 10px 20px;
  display: flex;
  justify-content: center;
`;
