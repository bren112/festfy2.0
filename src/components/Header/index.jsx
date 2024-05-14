<<<<<<< HEAD
import { Link, useLocation } from "react-router-dom";
import style from "./Header.module.css";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
=======
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import { useState } from "react";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
>>>>>>> 5b03a8d52eabd93616d767a4c817d542ebfea81f

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

<<<<<<< HEAD
  // Verifica se a URL atual corresponde à área /adm ou às páginas /aprovar, /lista ou /dashboard
  const isAdmArea = location.pathname.startsWith("/adm");
  const isApprovePage = location.pathname.startsWith("/aprovar");
  const isListPage = location.pathname.startsWith("/lista");
  const isDashboardPage = location.pathname.startsWith("/dashboard");

=======
>>>>>>> 5b03a8d52eabd93616d767a4c817d542ebfea81f
  return (
    <header className={style.header}>
      <Link to="/">
        <span>Festfy!</span>
      </Link>
      <nav
        onClick={toggleMenu}
        className={`${style.links} ${showMenu ? style.show : ""}`}
      >
        <Link to="/">Home</Link>
        <Link to="/sobre">Login</Link>
<<<<<<< HEAD
        <Link to="/adm">Adm</Link>

        {(isAdmArea || isApprovePage || isListPage || isDashboardPage) && (
          <>
            <Link to="/aprovar">Aprovar</Link>
            <Link to="/lista">Lista Festa</Link>
            <Link to="/dashboard">Dashboard</Link>
          </>
        )}
     
=======
        <Link to="/projetos">Festas</Link>
        <Link to="/contatos">Contatos</Link>
>>>>>>> 5b03a8d52eabd93616d767a4c817d542ebfea81f
      </nav>
      <div onClick={toggleMenu} className={style.menuButton}>
        <span className={style.menuItem}></span>
        <span className={style.menuItem}></span>
        <span className={style.menuItem}></span>
      </div>
    </header>
  );
}

export default Header;
