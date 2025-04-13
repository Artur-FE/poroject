export interface User {
    name: {
      first: string;
      last: string;
      title: string;
    };
    email: string;
    login: {
      uuid: string;
    };
    picture: {
      large: string;
    };
   
  }