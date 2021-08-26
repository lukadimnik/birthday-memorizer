import "./App.css";
import BirthdayForm from "./components/BirthdayForm";
import BirthdayList from "./components/BirthdayList";
import { useState } from "react";

function App() {
  const [birthdayList, setBirthdayList] = useState([
    {
      id: 1,
      firstName: "Riikka",
      lastName: "Dimnik",
      birthday: "11-09-1987",
    },
    {
      id: 2,
      firstName: "Frida",
      lastName: "Dimnik",
      birthday: "14-08-2019",
    },
    {
      id: 3,
      firstName: "Sofia",
      lastName: "Dimnik",
      birthday: "28-05-2021",
    },
    {
      id: 4,
      firstName: "Luka",
      lastName: "Dimnik",
      birthday: "26-11-1988",
    },
  ]);

  const addBirthday = (birthday) => {
    setBirthdayList(() => [...birthdayList, birthday]);
  };

  return (
    <div className="App">
      <BirthdayForm onAddBirthday={addBirthday} />
      <BirthdayList birthdayList={birthdayList} />
    </div>
  );
}

export default App;
