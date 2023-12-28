import { useState } from 'react';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function useFavColor() {
  const getFavColor = () => {
    // get cookie from browser if logged in
    const favColor = cookies.get("FAVCOLOR");
    return favColor;
  };

  const [favColor, setFavColor] = useState(getFavColor());

  const saveFavColor = userFavColor => {
    cookies.set("FAVCOLOR", userFavColor, { path: '/', maxAge: 60*60*24 });
    setFavColor(userFavColor);
  };

  return {
    setFavColor: saveFavColor,
    favColor
  }
}