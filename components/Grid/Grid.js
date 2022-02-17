import Figure from "../Figure/Figure";
import { results } from "../../mocks/results";
import { GridControls, GridFilter, GridItem, GridStyled } from "./Grid.styled";
import Topics from "../Topics/Topics";
import Sticky from "react-sticky-el";

export default function Grid() {
  return (
    <>
      <GridControls>
        <Sticky topOffset={-81} stickyClassName="sticky-filter">
          <GridFilter>
            <span></span>
            <label>Filter</label>
          </GridFilter>
        </Sticky>
        <Topics />
      </GridControls>
      <GridStyled breakpointCols={4}>
        {results.map((result, index) => (
          <GridItem key={index}>
            <Figure data={result} />
          </GridItem>
        ))}
      </GridStyled>
    </>
  );
}
