import { v4 } from "uuid";
import { Link } from "react-router-dom";
import axios from "axios";
import { createContext, useState } from "react";

import {
  LayoutComponent,
  Header,
  LogoText,
  Nav,
  Main,
  Footer,
  StyledNavLink,
  LogoImage,
} from "./styles";
import {
  LayoutProps,
  NavLinkObj,
  UserDataInterface,
  UserTextInterface,
} from "./types";
import { navLinksData } from "./data";
import Logo from "../../../src/assets/avatar.jpg";

export const UserContext = createContext<UserTextInterface>({
  userData: undefined,
  error: undefined,
  isLoading: false,
  getUser: () => {},
});

function Layout({ children }: LayoutProps) {
  const [userData, setUserData] = useState<UserDataInterface | undefined>({
    email: "",
    userName: "",
    titleName: "",
    firstName: "",
    lastName: "",
    gender: "",
    picture: "",
    country: "",
    city: "",
  });
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const USER_URL: string = "https://randomuser.me/api";

  const getUser = async () => {
    setError(undefined);
    try {
      setIsLoading(true);
      const response = await axios.get(USER_URL);
      const data = response.data.results[0];

      setUserData({
        email: data.email,
        userName: data.login.username,
        titleName: data.name.title,
        firstName: data.name.first,
        lastName: data.name.last,
        gender: data.gender,
        picture: data.picture.large,
        country: data.location.country,
        city: data.location.city,
      });
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const navLinks = navLinksData.map((navLink: NavLinkObj) => {
    return (
      <StyledNavLink
        key={v4()}
        to={navLink.to}
        style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        {navLink.linkName}
      </StyledNavLink>
    );
  });

  return (
    <UserContext.Provider value={{ userData, error, isLoading, getUser }}>
      <LayoutComponent>
        <Header>
          <Link to="/">
            <LogoImage src={Logo} />
          </Link>
          <Nav>
            {/* NavLink - компонент библиотеки, который добавляет ссылку на 
          страницу по маршруту через prop to */}
            {navLinks}
          </Nav>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <LogoText>
            Team Artur Fedoseiev, Alex Shumko, Evgeniy Buler, Gleb Medvedovsky
          </LogoText>
        </Footer>
      </LayoutComponent>
    </UserContext.Provider>
  );
}

export default Layout;
