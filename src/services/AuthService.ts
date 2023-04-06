import axios from "axios";

interface Credentials {
  email: string;
  password: string;
}

interface AuthResponse {
  accessToken: string;
}
const urlApi = process.env.DB_HOST;

export class AuthService {
  static async login(credentials: Credentials): Promise<AuthResponse> {
    const response = await axios.post<AuthResponse>(
      urlApi + "/api/auth/login",
      credentials
    );
    const authData = response.data;
    localStorage.setItem("accessToken", authData.accessToken);
    return authData;
  }

  static async logout(): Promise<void> {
    localStorage.removeItem("accessToken");
    // fazer chamada de logout no backend, se necessário
  }

  static async isLoggedIn(): Promise<boolean> {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return false;
    }
    // fazer chamada para verificar se o token é válido
    return true;
  }

  static async checkTokenValidity() {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      return false;
    }

    try {
      const response = await axios.get(urlApi + "/api/auth/check-token", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        return true;
      }
    } catch (error) {
      console.log(error);
    }

    return false;
  }
}
