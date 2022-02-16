import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import { Lockup, Primary, Super, Wrapper } from "./Header.styled";
import Sticky from "react-sticky-el";

export default function Header() {
  return (
    <Wrapper>
      <Super>
        <a>Northwestern</a>
        <Nav>
          <a>Libraries</a>
          <a>About</a>
          <a>Contact</a>
          <a>Sign In</a>
        </Nav>
      </Super>
      <Lockup>Libraries | Digital Collections</Lockup>
      <Sticky stickyClassName="sticky-primary">
        <Primary>
          <Nav>
            <a>Items</a>
            <a>Collections</a>
          </Nav>
          <Search />
        </Primary>
      </Sticky>
    </Wrapper>
  );
}
