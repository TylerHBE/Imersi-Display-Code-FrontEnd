import { useState } from 'react';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function useEmail() {
  const getEmail = () => {
    // get cookie from browser if logged in
    const email = cookies.get("EMAIL");
    return email;
  };

  const [email, setEmail] = useState(getEmail());

  const saveEmail = userEmail => {
    cookies.set("EMAIL", userEmail, { path: '/', maxAge: 60*60*24 });
    setEmail(userEmail);
  };

  return {
    setEmail: saveEmail,
    email: email
  }
}