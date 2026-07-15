import styles from "./Header.module.css";
import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";

function Header() {
  const menu = useRef();

  const toggleMenu = () => {
    menu.current.classList.toggle(styles["portrait-hidden"]);
  }
  const hideMenu = () => {
    menu.current.classList.add(styles["portrait-hidden"]);
  }

  const location = useLocation();
  useEffect(hideMenu, [location.pathname]);

  return (
    <header className={styles.header}>
      <h1><Link to="/">Message App</Link></h1>
      <button className={styles.hamburger} onClick={toggleMenu}>☰</button>
      <div ref={menu} className={`${styles.menu} ${styles["portrait-hidden"]}`}>
        <Link to="/chats">Chats</Link>
        <Link to="/account">My Account</Link>
        <a href="/sign_out">Logout</a>
      </div>
    </header>
  );
}

export default Header;
