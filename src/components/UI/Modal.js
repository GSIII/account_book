import React, { useState } from "react";
import styled from "styled-components";
import "./Modal.css";

const User = {
  name: "sesac",
  pw: "sesac",
};
export default function Modal({ onClose }) {
  const handleClose = () => {
    onClose?.();
  };
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");

  const handleEmail = (e) => {
    setName(e.target.value);
  };
  const handlePw = (e) => {
    setPw(e.target.value);
  };

  const onClickConfirmButton = () => {
    if (name === User.name && pw === User.pw) {
      alert(`${name}님 반갑습니다.`);
      handleClose();
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  };

  return (
    <>
      <Overlay>
        <ModalWrap>
          <Contents>
            <div className="name">
              <label>이름 : </label>
              <input
                className="input"
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={handleEmail}
              />
            </div>

            <div className="pw">
              <label>비밀번호 : </label>
              <input
                className="input"
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={pw}
                onChange={handlePw}
              />
            </div>
            <div className="modal_button">
              <button onClick={onClickConfirmButton} className="loginbutton">
                로그인
              </button>
              <button onClick={handleClose} className="closebutton">
                닫기
              </button>
            </div>
          </Contents>
        </ModalWrap>
      </Overlay>
    </>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 400px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Contents = styled.div`
  margin: 50px 30px;
`;
