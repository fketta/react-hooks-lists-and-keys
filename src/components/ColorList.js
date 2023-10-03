import React from "react";

function ColorItem(props) {
  return <li style={{ color: props.color }}>{props.color}</li>;
}

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "coldblue",
  ];

  const colorElements = colors.map((color) => {
    return <ColorItem key={color} color={color} />;
  });
  // etc
}

export default ColorList;
