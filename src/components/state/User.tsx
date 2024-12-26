import { useState } from "react";

type Authuser = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setUser] = useState<Authuser>({} as Authuser);
  //const [user, setUser] = useState<Authuser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Karthick",
      email: "karthick@gmail.com",
    });
  };
  //   const handleLogout = () => {
  //     setUser(null);
  //   };
  // if encased default user null aftr mount update a state
  //   const handleLogout = () => {
  //     setUser(null);
  //   };
  return (
    <div>
      <button onClick={handleLogin}>Log in</button>
      {/* <button onClick={handleLogout}>Log in</button> */}
      <div>
        <p>User Name: {user.name}</p>
        <p>User Email: {user.email}</p>
      </div>
      {/* <div>
        <p>User Name: {user?.name}</p>
        <p>User Email: {user?.email}</p>
      </div> */}
    </div>
  );
};
