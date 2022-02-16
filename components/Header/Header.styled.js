import { styled } from "../../stitches.config";
import { NavStyled } from "../Nav/Nav.styled";
import { Input, Button } from "../Search/Search.styled";

const Lockup = styled("div", {
  alignItems: "center",
  display: "flex",
  padding: "31px 5vw 50px",
  fontSize: "25px",
});

const Primary = styled("div", {
  backgroundColor: "white",
  color: "$slate12",
  display: "flex",
  width: "90vw",
  margin: "0 auto",
  height: "50px",
  zIndex: "1",
  transition: "$all",
  justifyContent: "space-between",

  "> span": {
    display: "flex",
    width: "0",
    opacity: "0",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    flexGrow: "0",
  },

  "> div": {
    display: "flex",
    flexGrow: "1",
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

const StyledHeader = styled("header", {
  backgroundColor: "$slate7",
  color: "$slate12",
  display: "flex",
  flexDirection: "column",
  marginBottom: "5px",

  ".sticky-primary": {
    zIndex: "1",

    [`& ${Primary}`]: {
      backgroundColor: "$slate12",
      color: "$slate1",
      width: "100vw",
      justifyContent: "space-between",

      "> span": {
        opacity: "1",
        width: "auto",
        padding: "0 1rem",
      },

      "> div": {
        flexGrow: "0",
      },
    },

    [`& ${Input}`]: {
      width: "0",
      backgroundColor: "transparent",
      color: "$slate1",
    },
  },
});

export { Lockup, Primary, Super, StyledHeader };
