import React from "react";
import { Card } from "antd";

const { Meta } = Card;

export default ({ name, image, price, selected, onClick }) => {
  return (
    <Card
      hoverable
      onClick={onClick}
      cover={
        <img
          alt={name}
          src={image}
          style={{
            maxHeight: 200,
            overflow: "hidden",
            objectFit: "contain",
          }}
        />
      }
      style={{
        border: selected ? "5px solid #ccc" : "none",
      }}
    >
      <Meta title={name} description={`$${price}`} />
    </Card>
  );
};
