import axios from "axios";
import Router from "next/router";
import RefreshToken from "./refreshToken";

interface logoutResponse {
  status: boolean;
  message: string;
}

export default async function Logout(): Promise<void> {
  try {
    const refresh_token: string | null = localStorage.getItem("refresh_token");
    const access_token: string | null = localStorage.getItem("access_token");
    await RefreshToken();
    if (!refresh_token) {
      void Router.push("/portal");
      return;
    }
    const value = {
        refresh_token: refresh_token,
    }
    const response = await axios.post<logoutResponse>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/logout`,
        value,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
        
      );
    const rStatus: boolean = response.data.status;

    if (rStatus === true) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      void Router.push("/portal");
    } else {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      void Router.push("/portal");
    }
  } catch (error) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    void Router.push("/portal");
  }
}
