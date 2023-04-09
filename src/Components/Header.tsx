import DrawerMenu from "./DrawerMenu";

export default function Header() {
  return (
    <header className="header">
      <ul className="header__list">
        <li className="header__list-item">
          <a href="#LINK1">LINK1</a>
        </li>
        <li className="header__list-item">
          <a href="#LINK2">LINK2</a>
        </li>
        <li className="header__list-item">
          <a href="#LINK3">LINK3</a>
        </li>
      </ul>
      <DrawerMenu />
    </header>
  );
}
