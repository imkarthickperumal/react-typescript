import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {

  // Object props type
  const PersonName = {
    first: "Tom",
    last: "jerry",
  };

  // Array props type
  const PersonNames = [
    {
      first: "Harry",
      last: "Potter",
    },
    {
      first: "Hermione",
      last: "Granger",
    },
    {
      first: "Ron",
      last: "Weasley",
    },
  ];
  return (
    <>
      <Greet name="Typescript" yearsCount={2025} isLoggedIn={false} />
      <Person name={PersonName} />
      <PersonList names={PersonNames}/>
    </>
  );
}

export default App;
