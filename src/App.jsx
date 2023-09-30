import { useState, useEffect } from 'react'
import './App.css';
import BirthdayForm from './components/BirthdayForm';
import BirthdayList from './components/BirthdayList';
import {
  createBirthday,
  deleteBirthday,
  getAllBirthdays,
  updateBirthday,
} from './birthdayService';

function App() {const [birthdayList, setBirthdayList] = useState([]);
  const what = useState('halo');
  console.log(what);

  const fetchBirthdays = async () => {
    const response = await getAllBirthdays();
    const data = response.data;
    setBirthdayList(data);
  };

  const deleteBirthdayHandler = (id) => {
    deleteBirthday(id);
    const updatedBirthdayList = birthdayList.filter(
      (birthday) => birthday.id !== id
    );
    setBirthdayList([...updatedBirthdayList]);
  };

  const addBirthday = (birthday) => {
    setBirthdayList((oldState) => [...oldState, birthday]);

    createBirthday({
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

export default App

// import './App.css';
// import BirthdayForm from './components/BirthdayForm';
// import BirthdayList from './components/BirthdayList';
// import { useEffect, useState } from 'react';
// import {
//   createBirthday,
//   deleteBirthday,
//   getAllBirthdays,
//   updateBirthday,
// } from './birthdayService';

// function App() {
  // const [birthdayList, setBirthdayList] = useState([]);
  // const what = useState('halo');
  // console.log(what);

  // const fetchBirthdays = async () => {
  //   const response = await getAllBirthdays();
  //   const data = response.data;
  //   setBirthdayList(data);
  // };

  // const deleteBirthdayHandler = (id) => {
  //   deleteBirthday(id);
  //   const updatedBirthdayList = birthdayList.filter(
  //     (birthday) => birthday.id !== id
  //   );
  //   setBirthdayList([...updatedBirthdayList]);
  // };

  // const addBirthday = (birthday) => {
  //   setBirthdayList((oldState) => [...oldState, birthday]);

  //   createBirthday({
  //     id: birthday.randomNumber,
  //     firstName: birthday.firstName,
  //     lastName: birthday.lastName,
  //     birthday: birthday.birthday,
  //   })
  //     .then((res) => setBirthdayList(birthdayList.concat(res.data)))
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   fetchBirthdays();
  // }, []);

  // const editHandler = (newBirthday) => {
  //   const filteredList = birthdayList.filter(
  //     (birthday) => birthday.id !== newBirthday.id
  //   );
  //   const newBirthdayList = [...filteredList, newBirthday];
  //   setBirthdayList(newBirthdayList);
  //   updateBirthday(newBirthday.id, newBirthday)
  //     .then((res) => res.data)
  //     .catch((err) => console.log(err));
  // };

  // return (
  //   <div className='App'>
  //     <BirthdayForm onAddBirthday={addBirthday} />
  //     <BirthdayList
  //       birthdayList={birthdayList}
  //       onDeleteBirthday={deleteBirthdayHandler}
  //       onEdit={editHandler}
  //     />
  //   </div>
  // );
// }

// export default App;
