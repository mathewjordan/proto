import Nav from "../Nav/Nav";
import Search from "../Search/Search";

export default function Header() {
  return (
    <header>
      <div>
        <div>
          <div>
            <a>Northwestern</a>
          </div>
          <div>
            <Nav />
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
}
