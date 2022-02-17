import { useEffect, useRef, useState } from "react";
import { Button, Clear, Input, Wrapper } from "./Search.styled";

export default function Search({ isSearchActive }) {
  const search = useRef(null);

  const [searchValue, setSearchValue] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  const handleSearchFocus = (e) => {
    e.type === "focus" ? setSearchFocus(true) : setSearchFocus(false);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSearchResults = () => {
    setSearchValue("");
    search.current.value = "";
  };

  useEffect(() => {
    !searchFocus && !searchValue ? isSearchActive(false) : isSearchActive(true);
  }, [searchFocus, searchValue]);

  return (
    <Wrapper>
      <Input
        placeholder="Search by keyword or phrase, ex: Berkeley Music Festival"
        onChange={handleSearchChange}
        onFocus={handleSearchFocus}
        onBlur={handleSearchFocus}
        ref={search}
      />
      <Button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <title>Search</title>
          <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
        </svg>
      </Button>
      {searchValue && (
        <Clear onClick={clearSearchResults}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Clear</title>
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
          </svg>
        </Clear>
      )}
    </Wrapper>
  );
}
