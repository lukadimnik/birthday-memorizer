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
import { useSignOut } from 'react-auth-kit';
import { useNavigate } from 'react-router';
import CustomModal from './components/UI/Modal';

function App() {
  const [birthdayList, setBirthdayList] = useState<Birthday[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const signOut = useSignOut();
  const navigate = useNavigate();
  const logout = () => {
    signOut();
    navigate('/login');
  };

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
      <button onClick={logout}>Sign out</button>
      <h1>Happy Birthday!</h1>
      <BirthdayForm onAddBirthday={addBirthday} />
      <BirthdayList
        birthdayList={birthdayList}
        onDeleteBirthday={deleteBirthdayHandler}
        onEdit={editHandler}
      />
      <button onClick={openModal}>Open Modal</button>
      <CustomModal isOpen={modalIsOpen} closeModal={closeModal} title='Whatever'>
        <p>Modal Body</p>
        <p>Modal content</p>
      </CustomModal>
    </div>
  );
}

export default App;
