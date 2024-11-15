import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "1월", value: 0 },
    { label: "2월", value: 0 },
    { label: "3월", value: 0 },
    { label: "4월", value: 0 },
    { label: "5월", value: 0 },
    { label: "6월", value: 0 },
    { label: "7월", value: 0 },
    { label: "8월", value: 0 },
    { label: "9월", value: 0 },
    { label: "10월", value: 0 },
    { label: "11월", value: 0 },
    { label: "12월", value: 0 },
  ];

  // 각 항목에 따라 값을 업데이트합니다.
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // 월을 가져옵니다. (0: 1월, 1: 2월 ...)

    if (expense.type === "수입") {
      chartDataPoints[expenseMonth].value += +expense.amount;
    } else if (expense.type === "지출") {
      chartDataPoints[expenseMonth].value -= +expense.amount;
    }
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
