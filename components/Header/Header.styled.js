import { styled } from "../../stitches.config";
import { NavStyled } from "../Nav/Nav.styled";

const StyledHeader = styled("header", {
  backgroundColor: "$slate7",
  color: "$slate12",
  display: "flex",
  flexDirection: "column",
  marginBottom: "5px",

  ".sticky-primary": {
    zIndex: "1",
  },
});

const Super = styled("div", {
  backgroundColor: "$slate12",
  color: "$slate1",
  height: "50px",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  padding: "0 5vw",

  [`& ${NavStyled}`]: {
    fontSize: "12px",

    a: {
      padding: "0 1rem",

      "&:last-child": {
        paddingRight: "0",
      },
    },
  },
});

const Primary = styled("div", {
  backgroundColor: "white",
  color: "$slate12",
  display: "flex",
  width: "90vw",
  margin: "0 auto",
  height: "50px",
  justifyContent: "space-between",
  zIndex: "1",
});

const Lockup = styled("div", {
  alignItems: "center",
  display: "flex",
  padding: "31px 5vw 50px",
  fontSize: "25px",
});

export { Lockup, Primary, Super, StyledHeader };
