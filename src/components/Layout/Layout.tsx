import { v4 } from "uuid"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { createContext, useState } from "react"

import {
  LayoutComponent,
  Header,
  LogoText,
  Nav,
  Main,
  Footer,
  StyledNavLink,
  LogoImage,
  ButtonContainer
} from "./styles"
import { LayoutProps, NavLinkObj, UserDataInterface, UserTextInterface } from "./types"
import { navLinksData } from "./data"
import Logo from '../../../src/assets/avatar.jpg'
import Button from "../Button/Button"


export const UserContext = createContext<UserTextInterface>({
  userData: undefined,
  error: undefined,
  isLoading: false,
  getUser: () => { }
})

function Layout({ children }: LayoutProps) {
  const [userData, setUserData] = useState<UserDataInterface | undefined>({
    email: '',
    userName: '',
    titleName: '',
    firstName: '',
    lastName: '',
    gender: '',
    picture: '',
    country: '',
    city: ''

  });
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const USER_URL: string = 'https://randomuser.me/api';

  const getUser = async () => {
    setError(undefined)
    try {
      setIsLoading(true);
      const response = await axios.get(USER_URL)
      const data = response.data.results[0];
      
      
      console.log(data.email)
      console.log(data.login.username)
      console.log(data.name.title)
      console.log(data.name.first)
      console.log(data.name.last)
      console.log(data.gender)
      console.log(data.picture.large)
      console.log(data.location.country)
      console.log(data.location.city)

      // const userDataInfo:UserDataInterface = {
      //   email: data.email,
      //   userName: data.login.username,
      //   titleName: data.name.title,
      //   firstName: data.name.first,
      //   lastName: data.name.last,
      //   gender: data.gender,
      //   picture: data.picture.large,
      //   country: data.location.country,
      //   city: data.location.city
      // }
      setUserData({email: data.email,
        userName: data.login.username,
        titleName: data.name.title,
        firstName: data.name.first,
        lastName: data.name.last,
        gender: data.gender,
        picture: data.picture.large,
        country: data.location.country,
        city: data.location.city});

      // console.log({userDataInfo});
      console.log(userData);
      

      // const data = response.data;
      // setJoke(`${data.setup} - ${data.punchline}`)
    }
    catch (error: any) {
      console.log(error.message);
      setError(error.message)
    }
    finally {
      console.log('Результат получен');
      setIsLoading(false);
    }
  }

  const navigate = useNavigate();

  const goBack = () => {
    //при вызове функции navigate, если добавить в качестве атрибута -1,
    //тогда при выполнении функции нас всегда будет возвращать на предыдущую открытую страницу
    navigate(-1)
  }

  const navLinks = navLinksData.map((navLink: NavLinkObj) => {
    return (
      <StyledNavLink key={v4()} to={navLink.to} style={
        ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
      }>{navLink.linkName}</StyledNavLink>
    )
  })

  return (
    <UserContext.Provider value={{ userData, error, isLoading, getUser }}>
      <LayoutComponent>
        <Header>
          <Link to='/'>
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
          <ButtonContainer>
            <Button name='<-' onClick={goBack} />
          </ButtonContainer>
          <LogoText>Team Artur Fedoseiev, Alex Shumko, Evgeniy Buler, Gleb Medvedovsky</LogoText>
        </Footer>
      </LayoutComponent>
    </UserContext.Provider>
  )
}

export default Layout