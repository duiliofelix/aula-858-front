import React from "react";
import { Link } from "react-router-dom";

const Result = ({ title }) => (
  <div style={{ marginBottom: '15px' }}>
    <span style={{ fontSize: '12pt', color: 'darkgray' }}>url</span>


    {title ? (
      <h1 style={{ margin: 0, fontSize: '16pt', color: 'darkblue' }}>
        <Link to='/item'>{title}</Link>
      </h1>
    ) : (
      <span>Sem Título</span>
    )}


    <p style={{ margin: 0 }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
);

export default Result;
