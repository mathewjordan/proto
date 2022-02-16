import { styled } from "../../stitches.config";

const Wrapper = styled("nav", {
  position: "relative",
  display: "flex",
  flexShrink: "0",
  flexGrow: "1",
});

const Input = styled("input", {
  display: "flex",
  width: "100%",
  border: "none",
  backgroundColor: "$slate3",
  padding: "0 1.618rem",
  fontSize: "19px",

  "&::placeholder": {
    fontSize: "19px",
  },
});

const Button = styled("button", {
  position: "absolute",
  display: "flex",
  right: "0",
  height: "50px",
  width: "50px",
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  cursor: "pointer",
  border: "none",
  backgroundColor: "transparent",
});

export { Button, Input, Wrapper };
