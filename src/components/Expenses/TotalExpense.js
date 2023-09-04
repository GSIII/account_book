import React, { useState, useEffect } from "react";
import "./TotalExpense.css";

export default function TotalExpense(props) {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalOutcome, setTotalOutcome] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  console.log(props.items);
  console.log(props.year);
  props.type.forEach((element) => {
    console.log(element.type);
  });

  useEffect(() => {
    let total = { balance: 0, income: 0, outcome: 0 };
    if (
      props.items.forEach((item) => {
        if (item.type === "지출") {
          total.outcome += Number(item.amount);
          total.balance -= Number(item.amount);
        } else {
          total.income += Number(item.amount);
          total.balance += Number(item.amount);
        }
      })
    );
    setTotalOutcome(total.outcome);
    setTotalIncome(total.income);
    setTotalBalance(total.balance);
  }, [props.items]);

  return (
    <div className="container">
      <div className="totalbalance__container">
        남은 금액 :{" "}
        {totalBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
      </div>
      <div className="incomeoutcome__container">
        <div className="totalincome">
          총 수입 :{" "}
          {totalIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
        </div>
        <div className="totaloutcome">
          총 지출 :{" "}
          {totalOutcome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
        </div>
      </div>
    </div>
  );
}
