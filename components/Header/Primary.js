import { useState } from "react";
import Sticky from "react-sticky-el";
import { Primary } from "./Header.styled";
import Nav from "../Nav/Nav";
import Search from "../Search/Search";

export default function HeaderPrimary() {
  const [searchActive, setSearchActive] = useState(false);

  const handleIsSearchActive = (status) => {
    setSearchActive(status);
  };

  return (
    <Sticky stickyClassName="sticky-primary">
      <Primary data-search-active={searchActive}>
        <span>Northwestern</span>
        <div>
          <Nav>
            <a>Items</a>
            <a>Collections</a>
          </Nav>
          <Search isSearchActive={handleIsSearchActive} />
        </div>
      </Primary>
    </Sticky>
  );
}
