import React from "react";
// import "../../storybook/button.stories.scss";

function Button(props) {
  const { variant = "primary", children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
