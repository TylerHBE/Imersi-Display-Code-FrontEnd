import { useState } from 'react';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function useGameKey() {
  const getGameKey = () => {
    // get cookie from browser if logged in
    const gameKey = cookies.get("GAMEKEY");
    return gameKey;
  };

  const [gameKey, setGameKey] = useState(getGameKey());

  const saveGameKey = userGameKey => {
    cookies.set("GAMEKEY", userGameKey, { path: '/', maxAge: 60*60*24 });
    setGameKey(userGameKey);
  };

  return {
    setGameKey: saveGameKey,
    gameKey: gameKey
  }
}