import { HeaderBar, ResponsiveMenu, ResponsiveMenuContent } from "./styles";
import LogoGreen from "../../asssets/svg/logo-2.svg";
import LogoWhite from "../../asssets/svg/logo-1.svg";
import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  auth?: boolean;
  children: ReactNode;
  whiteSchema?: boolean;
}

const Header = ({ children, whiteSchema, auth = false }: HeaderProps) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderBar isAuth={auth}>
      <Link to="/">
        <figure>
          <img src={whiteSchema ? LogoWhite : LogoGreen} alt="Logo" />
        </figure>
      </Link>
      <nav className="desktop">{children}</nav>
      {!auth && (
        <>
          <ResponsiveMenu
            onClick={() => setOpenMenu(!openMenu)}
            openMenu={openMenu}
          >
            <div className="bars"></div>
            <div className="bars"></div>
            <div className="bars"></div>
          </ResponsiveMenu>
          <ResponsiveMenuContent openMenu={openMenu}>
            {children}
          </ResponsiveMenuContent>
        </>
      )}
    </HeaderBar>
  );
};

export default Header;
