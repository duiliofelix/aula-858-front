import React from "react";

const cardStyle = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '10px',
  borderColor: 'rgba(0,0,0,.5)',
  padding: '10px',
};

const FloatingCard = () => (
  <div style={cardStyle}>
    <h1>Titulo</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div>Imagem</div>
  </div>
);

export default FloatingCard;
