import axios from "axios";
import Router from "next/router";

interface RefreshResponse {
  status: boolean;
  access_token: string;
}

export default async function RefreshToken(): Promise<void> {
  const storeAccessToken = (access_token: string) => {
    localStorage.setItem("access_token", access_token);
  };

  try {
    const refresh_token: string | null = localStorage.getItem("refresh_token");

    if (!refresh_token) {
      void Router.push("/portal");
      return;
    }

    const response = await axios.post<RefreshResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/refresh`,
      {
        refresh_token: refresh_token,
      },
    );
    const rStatus: boolean = response.data.status;

    if (rStatus === true) {
      storeAccessToken(response.data.access_token);
    } else {
      void Router.push("/portal");
    }
  } catch (error) {
    void Router.push("/portal");
  }
}
