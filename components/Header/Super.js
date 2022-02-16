import Nav from "../Nav/Nav";
import { Super } from "./Header.styled";

export default function HeaderSuper() {
  return (
    <Super>
      <a>Northwestern</a>
      <Nav>
        <a>Libraries</a>
        <a>About</a>
        <a>Contact</a>
        <a>Sign In</a>
      </Nav>
    </Super>
  );
}
