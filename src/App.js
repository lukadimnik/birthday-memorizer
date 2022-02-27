import './App.css';
import BirthdayForm from './components/BirthdayForm';
import BirthdayList from './components/BirthdayList';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [birthdayList, setBirthdayList] = useState([]);
  const what = useState('halo');
  console.log(what);

  const fetchBirthdays = async () => {
    const response = await axios.get('http://localhost:3001/birthdays');
    const data = response.data;
    setBirthdayList(data);
  };

  const deleteBirthdayHandler = (id) => {
    axios.delete(`http://localhost:3001/birthdays/${id}`);
    const updatedBirthdayList = birthdayList.filter(
      (birthday) => birthday.id !== id
    );
    setBirthdayList([...updatedBirthdayList]);
  };

  const addBirthday = (birthday) => {
    setBirthdayList((oldState) => [...oldState, birthday]);

    axios
      .post('http://localhost:3001/birthdays', {
        id: birthday.randomNumber,
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

  const editHandler = (newBirthday) => {
    const filteredList = birthdayList.filter(
      (birthday) => birthday.id !== newBirthday.id
    );
    const newBirthdayList = [...filteredList, newBirthday];
    setBirthdayList(newBirthdayList);
    axios
      .put(`http://localhost:3001/birthdays/${newBirthday.id}`, newBirthday)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  return (
    <div className='App'>
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
