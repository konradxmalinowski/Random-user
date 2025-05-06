import Main from "./Main";
import Header from "./Header";
import { useEffect, useState } from "react";

export default function App() {
  function generateRandomUser() {
    fetch("https://randomuser.me/api")
      .then((response) => {
        if (response.ok) return response.json();
        else console.error("Error while fetching data");
      })
      .then((result) => {
        setUser(result);
        console.clear();
      });
  }

  useEffect(generateRandomUser, []);

  const [user, setUser] = useState(null);

  return (
    <>
      <Header handleClick={generateRandomUser} />
      <Main data={user} />
    </>
  );
}
