import Figure from "../Figure/Figure";
import { results } from "../../mocks/results";
import { GridItem, GridStyled } from "./Grid.styled";

export default function Grid() {
  return (
    <GridStyled breakpointCols={4}>
      {results.map((result, index) => (
        <GridItem key={index}>
          <Figure data={result} />
        </GridItem>
      ))}
    </GridStyled>
  );
}
