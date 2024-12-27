import { useState } from "react";
import "./App.css";
import { EventButton } from "./components/EventButton";
import { EventInput } from "./components/EventInput";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { StyleContainer } from "./components/StyleContainer";
import { User } from "./components/state/User";
import { Counter } from "./components/state/Counter";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";

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

  {
    /* Event handling props input change */
  }

  const [text, setText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value); // Update the state when the input changes
    console.log("Change text:", event.target.value); // Log the value
  };
  return (
    <>
      {/* Basics props */}
      <Greet name="Typescript" yearsCount={2025} isLoggedIn={false} />
      {/* Objects props */}
      <Person name={PersonName} />
      {/* Array props */}
      <PersonList names={PersonNames} />
      {/* Event handling props Button clicked */}
      <EventButton
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      {/* Event handling props input change */}
      <EventInput value={text} handleChange={handleChange} />

      {/* Style props */}
      <StyleContainer
        styles={{ border: "1px solid #000000", margin: "1rem" }}
      />

      {/* useState Props */}
      <User />

      {/* useReducer Props */}
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </>
  );
}

export default App;
