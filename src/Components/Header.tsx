import Nav from "./Nav";
import DrawerMenu from "./DrawerMenu";

export default function Header() {
  return (
    <header className="header">
      <Nav />
      <DrawerMenu />
    </header>
  );
}
