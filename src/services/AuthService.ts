import axios from "axios";
import { IUser } from "../interfaces/User";

interface Credentials {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: IUser;
}

export interface IRegistration {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class AuthService {
  static async register(registration: IRegistration): Promise<IUser> {
    const response = await axios.post<AuthResponse>(
      "http://localhost:3000/api/auth/register",
      registration
    );
    const authData = response.data;
    localStorage.setItem("accessToken", authData.token);
    return authData.user;
  }

  static async login(credentials: Credentials): Promise<IUser> {
    const response = await axios.post<AuthResponse>(
      "http://localhost:3000/api/auth/login",
      credentials
    );
    console.log(response);
    const authData = response.data;
    localStorage.setItem("accessToken", authData.token);
    return authData.user;
  }

  static async logout(): Promise<void> {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return;
    }
    localStorage.removeItem("accessToken");
  }

  static async isLoggedIn(): Promise<boolean> {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return false;
    }
    try {
      const response = await axios.get("http://localhost:3000/api/auth/check", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.status === 200;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async checkTokenValidity() {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      return false;
    }

    try {
      const response = await axios.get(
        "http://localhost:3000/api/auth/check-token",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }

    return false;
  }
}
