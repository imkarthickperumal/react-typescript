import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("handleLogin");
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    console.log("handleLogout");
  };
  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      <div>User is{isLoggedIn ? "Logged in" : "Logged out"}</div>
    </div>
  );
};
