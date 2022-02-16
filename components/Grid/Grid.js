import Figure from "../Figure/Figure";
import { results } from "../../mocks/results";
import { GridItem, GridStyled } from "./Grid.styled";

export default function Grid() {
  return (
    <GridStyled breakpointCols={4}>
      {results.map((result) => (
        <GridItem>
          <Figure data={result} />
        </GridItem>
      ))}
    </GridStyled>
  );
}
