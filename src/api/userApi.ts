import { User } from "../types/User";

export const fetchUserData = async (credentials: {
  email: string;
  password: string;
}): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isValid = credentials.email && credentials.password;
      if (!isValid) {
        reject(new Error("Invalid credentials"));
      }

      const nameFromEmail = credentials.email.split("@")[0].replace(/[._]/g, " ");
      resolve({
        id: Date.now(),
        name: nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1),
        email: credentials.email,
      });
    }, 1500);
  });
};
