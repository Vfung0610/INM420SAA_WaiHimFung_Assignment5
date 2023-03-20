import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import menuIcon from "../assets/images/menuIcon.png";
import "../assets/css/Layout.css";

const Layout = () => {
  const [openMenu, setMenu] = useState(false);
  const [showMenuIcon, setIcon] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 650) {
      setMenu(true);
      setIcon(false);
    }
  }, []);

  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      {showMenuIcon && (
        <img
          src={menuIcon}
          alt="A Menu Icon"
          className="menuIcon"
          onClick={() => {
            setMenu(!openMenu);
          }}
        />
      )}

      {openMenu && (
        <nav>
          <ul>
            <li>
              <NavLink className="navItem" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navItem" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="navItem" to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className="navItem" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
};

export default Layout;
