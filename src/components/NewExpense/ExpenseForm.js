import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredType, setEnteredType] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const typeChangeHandler = (event) => {
    setEnteredType(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      type: enteredType,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>항목</label>
          <input
            type="text"
            value={enteredTitle}
            placeholder="항목 입력"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>금액</label>
          <input
            type="number"
            min="0"
            id="amount"
            value={enteredAmount}
            placeholder="금액 입력"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>날짜</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control_inout">
          <span className="income">
            <label for="수입">수입</label>
            <input
              type="checkbox"
              id="수입"
              value="수입"
              onChange={typeChangeHandler}
              checked={enteredType === "수입" || ""}
            />
          </span>

          {/* </div>
        <div className="new-expense__control"> */}
          <span className="outcome">
            <label for="지출">지출</label>
            <input
              type="checkbox"
              id="지출"
              value="지출"
              onChange={typeChangeHandler}
              checked={enteredType === "지출" || ""}
            />
          </span>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" className="submit">
          입력
        </button>
        <button type="button" className="close" onClick={props.onCancel}>
          닫기
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
