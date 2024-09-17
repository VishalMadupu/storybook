import React from "react";
import Button from "../../app/components/button/button.js"; // Adjust this path according to your file structure
import "../../storybook/button/button.stories.scss";

export default {
  title: "button",
  component: Button,
};

export const Primary = () => (
  <button className="primary">Primary</button>
);

export const Secondary = () => (
  <button className="secondary">Secondary</button>
);

export const Success = () => (
  <button className="success">Success</button>
);

export const Danger = () => (
  <button className="danger">Danger</button>
);
