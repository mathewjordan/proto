import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import { Primary } from "./Header.styled";
import Sticky from "react-sticky-el";

export default function HeaderPrimary() {
  return (
    <Sticky stickyClassName="sticky-primary">
      <Primary>
        <span>Northwestern</span>
        <div>
          <Nav>
            <a>Items</a>
            <a>Collections</a>
          </Nav>
          <Search />
        </div>
      </Primary>
    </Sticky>
  );
}
