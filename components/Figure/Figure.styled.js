import { styled } from "../../stitches.config";

const FigureStyled = styled("figure", {
  display: "flex",
  flexDirection: "column",
  padding: "0",
  margin: "0",
});

const Image = styled("div", {
  backgroundColor: "$slate11",
});

const Title = styled("span", {
  fontSize: "15px",
  fontWeight: "700",
});

const Type = styled("span", {
  fontSize: "12px",
});

export { FigureStyled, Image, Title, Type };
