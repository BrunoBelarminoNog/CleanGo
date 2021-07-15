import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaChartLine, FaStar, FaCog, FaTasks } from "react-icons/fa";
import { AsideContainer, MenuWrapper, Logo } from "./styles";
import LogoWhite from "../../asssets/svg/only-logo-white.svg";
import LogoAside from "../../asssets/svg/logo-white-aside.svg";
import { useAuth } from "../../providers/Auth";
const Aside = () => {
  const { pathname } = useLocation();
  const navLinks = useRef<HTMLAnchorElement[]>([]);
  const [topIndicator, setTopIndicator] = useState("0");
  const [leftIndicator, setLeftIndicator] = useState("-4px");
  const indicator = useRef<HTMLSpanElement>(null);
  const { user } = useAuth();
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
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => getDimensions(), 150);
    };

    resizeListener();
    window.onresize = () => {
      resizeListener();
    };

    return () => {
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
        <MenuWrapper
          isPartner={user?.partner}
          topIndicator={topIndicator}
          leftIndicator={leftIndicator}
        >
          <NavLink
            to={user?.partner ? "/dashboardparceiro/" : "/dashboardcliente/"}
            ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to={
              user?.partner
                ? "/dashboardparceiro/servicos"
                : "/dashboardcliente/servicos"
            }
            ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            <img src={LogoAside} alt="serviços" />
            <span>Serviços</span>
          </NavLink>
          {user?.partner && (
            <NavLink
              to="/dashboardparceiro/receita"
              ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
              activeClassName="navlink--active"
            >
              <FaChartLine />
              <span>Ganhos</span>
            </NavLink>
          )}
          <NavLink
            to={
              user?.partner
                ? "/dashboardparceiro/avaliacoes"
                : "/dashboardcliente/avaliacoes-e-servicos"
            }
            ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
            activeClassName="navlink--active"
          >
            {user?.partner ? <FaStar /> : <FaTasks />}
            <span>{user?.partner ? "Avaliações" : "Histórico"}</span>
          </NavLink>
          {!user?.partner && (
            <NavLink
              to={"/dashboardcliente/configuracoes"}
              ref={(el: HTMLAnchorElement) => navLinks.current.push(el)}
              activeClassName="navlink--active"
            >
              <FaCog />
              <span>Configurações</span>
            </NavLink>
          )}
          <span className="indicator" ref={indicator}></span>
        </MenuWrapper>
      </div>
    </AsideContainer>
  );
};

export default Aside;
