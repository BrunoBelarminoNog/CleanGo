import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaBullhorn, FaChartLine, FaStar } from "react-icons/fa";
import { AsideContainer, MenuWrapper, Logo } from "./styles";
import LogoWhite from "../../asssets/svg/only-logo-white.svg";
import LogoAside from "../../asssets/svg/logo-white-aside.svg";
const Aside = () => {
  const { pathname } = useLocation();
  const navLinks = useRef<HTMLAnchorElement[]>([]);
  const [topIndicator, setTopIndicator] = useState("0");
  const [leftIndicator, setLeftIndicator] = useState("-4px");
  const indicator = useRef<HTMLSpanElement>(null);

  const getDimensions = () => {
    navLinks.current.forEach((item: HTMLElement) => {
      if (item?.className === "navlink--active") {
        const top = item.offsetTop;
        const left = item.offsetLeft;
        setLeftIndicator(`${left}px`);
        setTopIndicator(`${top}px`);
      }
    });
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resizeListener = () => {
      // prevent execution of previous setTimeout

      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => getDimensions(), 150);
    };

    resizeListener();

    // set resize listener
    window.onresize = () => {
      resizeListener();
    };

    // clean up function
    return () => {
      // remove resize listener
      window.onresize = () => {
        resizeListener();
      };
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AsideContainer>
      <Logo src={LogoWhite} alt="Logo"></Logo>
      <div>
        <MenuWrapper topIndicator={topIndicator} leftIndicator={leftIndicator}>
          <NavLink
            to="/dashboardparceiro/"
            ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/dashboardparceiro/servicos"
            ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <img src={LogoAside} alt="serviços" />
            <span>Serviços</span>
          </NavLink>
          <NavLink
            to="/dashboardparceiro/receita"
            ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <FaChartLine />
            <span>Ganhos</span>
          </NavLink>
          <NavLink
            to="/dashboardparceiro/avaliacoes"
            ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <FaStar />
            <span>Avaliações</span>
          </NavLink>
          <NavLink
            to="/dashboardparceiro/reclamacoes"
            ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <FaBullhorn />
            <span>Reclamações</span>
          </NavLink>
          {/* <NavLink
            to="/dashboardparceiro/configuracoes"
            ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <FaCog />
            <span>Configurações</span>
          </NavLink> */}
          <span className="indicator" ref={indicator}></span>
        </MenuWrapper>
      </div>
    </AsideContainer>
  );
};

export default Aside;
