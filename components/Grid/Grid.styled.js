import { styled } from "../../stitches.config";
import Masonry from "react-masonry-css";

const GridItem = styled("div", {
  margin: "1rem 1rem 0.618rem",
  zIndex: "1",
});

const GridStyled = styled(Masonry, {
  display: "flex",
  margin: "auto 5vw",
  maxWidth: "90vw",
  position: "relative",
  zIndex: "1",
});

export { GridItem, GridStyled };
