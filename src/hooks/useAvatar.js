import { useState } from 'react';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function useAvatar() {
  const getAvatar = () => {
    // get cookie from browser if logged in
    const avatar = cookies.get("AVATAR");
    return avatar;
  };

  const [avatar, setAvatar] = useState(getAvatar());

  const saveAvatar = userAvatar => {
    cookies.set("AVATAR", userAvatar, { path: '/', maxAge: 60*60*24 });
    setAvatar(userAvatar);
  };

  return {
    setAvatar: saveAvatar,
    avatar
  }
}