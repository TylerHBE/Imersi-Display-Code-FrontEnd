import { useState } from 'react';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function useToken() {
  const getToken = () => {
    // get cookie from browser if logged in
    const token = cookies.get("TOKEN");
    return token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    cookies.set("TOKEN", userToken, { path: '/', maxAge: 60*60*24 });
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  }
}