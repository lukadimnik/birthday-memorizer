import { useState } from 'react';
import { Birthday } from '../models/interfaces';
import './BirthdayForm.css';

interface BirthdayFormProps {
  onAddBirthday: (birthday: Birthday) => void;
}

const BirthdayForm = ({ onAddBirthday }: BirthdayFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');

  const addBirthdayHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let randomNumber = Math.floor(Math.random() * 10000 + 1);
    const newBirthday = {
      id: randomNumber,
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
    };
    onAddBirthday(newBirthday);
    setFirstName('');
    setLastName('');
    setBirthday('');
  };

  const firstNameChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value);
  };

  const lastNameChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setLastName(event.currentTarget.value);
  };

  const birthdayChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setBirthday(event.currentTarget.value);
  };

  return (
    <div className='birthday-form'>
      <h3>Add a birthday!</h3>
      <form className='birthday-form-form' onSubmit={addBirthdayHandle}>
        <label className='birthday-form-label'>
          Firstname:
          <input
            id='firstName'
            className='birthday-form-input'
            type='text'
            value={firstName}
            onChange={firstNameChangeHandler}
          />
        </label>
        <label className='birthday-form-label'>
          Lastname:
          <input
            id='lastName'
            className='birthday-form-input'
            type='text'
            value={lastName}
            onChange={lastNameChangeHandler}
          />
        </label>
        <label className='birthday-form-label'>
          Birthdate:
          <input
            id='birthday'
            className='birthday-form-input'
            type='date'
            value={birthday}
            onChange={birthdayChangeHandler}
          />
        </label>

        <button type='submit' className='birthday-form-submit-button'>
          Save
        </button>
      </form>
    </div>
  );
};

export default BirthdayForm;
