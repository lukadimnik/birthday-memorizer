import { useState, useEffect } from 'react';
import './App.css';
import BirthdayForm from './components/BirthdayForm';
import BirthdayList from './components/BirthdayList';
import {
  createBirthday,
  deleteBirthday,
  getAllBirthdays,
  updateBirthday,
} from './api/birthdayService';
import { Birthday } from './models/interfaces';

function App() {
  const [birthdayList, setBirthdayList] = useState<Birthday[]>([]);

  const fetchBirthdays = async () => {
    const response = await getAllBirthdays();
    const data = response.data;
    setBirthdayList(data);
  };

  const deleteBirthdayHandler = (id: number) => {
    deleteBirthday(id);
    const updatedBirthdayList = birthdayList.filter(
      (birthday) => birthday.id !== id
    );
    setBirthdayList([...updatedBirthdayList]);
  };

  const addBirthday = (birthday: Birthday) => {
    setBirthdayList((oldState) => [...oldState, birthday]);

    createBirthday({
      firstName: birthday.firstName,
      lastName: birthday.lastName,
      birthday: birthday.birthday,
    })
      .then((res) => setBirthdayList(birthdayList.concat(res.data)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchBirthdays();
  }, []);

  const editHandler = (newBirthday: Birthday) => {
    const filteredList = birthdayList.filter(
      (birthday) => birthday.id !== newBirthday.id
    );
    const newBirthdayList = [...filteredList, newBirthday];
    setBirthdayList(newBirthdayList);
    updateBirthday(newBirthday.id, newBirthday)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  return (
    <div className='App'>
      <h1>Happy Birthday!</h1>
      <BirthdayForm onAddBirthday={addBirthday} />
      <BirthdayList
        birthdayList={birthdayList}
        onDeleteBirthday={deleteBirthdayHandler}
        onEdit={editHandler}
      />
    </div>
  );
}

export default App;
