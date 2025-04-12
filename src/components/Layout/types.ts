import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode
}

export interface NavLinkObj {
  to: string,
  linkName: string
}
export interface UserDataInterface{
  email: string,
  userName: string,
  titleName: string,
  firstName: string,
  lastName: string,
  gender: string,
  picture: string,
  country: string,
  city: string
}

export interface UserTextInterface {
  userData: UserDataInterface | undefined,
  error: string | undefined,
  isLoading: boolean,
  getUser: () => void
}
