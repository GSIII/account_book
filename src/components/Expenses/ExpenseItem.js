import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  console.log(props.type);

  return (
    <>
      <li>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">
              {props.type === "지출"
                ? "-" +
                  props.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "+" +
                  props.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
        </Card>
      </li>
    </>
  );
};

export default ExpenseItem;
