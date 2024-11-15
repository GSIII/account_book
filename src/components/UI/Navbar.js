import React, { useState } from "react";
import Modal from "./Modal";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };
  return (
    <>
      <header className="header">
        <h1>Money Book</h1>
        <div className="button" onClick={onClickButton}>
          로그인
        </div>
      </header>
      {isOpen && (
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
}
