import React from "react";
import Result from "./Result";

const ResultList = ({ list }) => (
  <div style={{ gridRow: 2, gridColumn: 2 }}>
    {list && list.map((item) => (
      <Result key={item.login} title={item.name || item.login} />
    ))}
  </div>
);

export default ResultList;
