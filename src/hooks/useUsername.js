import { useState } from 'react';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function useUsername() {
  const getUsername = () => {
    // get cookie from browser if logged in
    const username = cookies.get("USERNAME");
    return username;
  };

  const [username, setUsername] = useState(getUsername());

  const saveUsername = userUsername => {
    cookies.set("USERNAME", userUsername, { path: '/', maxAge: 60*60*24 });
    setUsername(userUsername);
  };

  return {
    setUsername: saveUsername,
    username: username
  }
}