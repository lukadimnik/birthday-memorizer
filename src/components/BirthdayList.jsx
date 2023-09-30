import React from 'react';
import BirthdayListItem from './BirthdayListItem';

const BirthdayList = (props) => {
  const listOfBirthdays = props.birthdayList
    .sort()
    .map((birthday) => (
      <BirthdayListItem
        key={birthday.id}
        id={birthday.id}
        firstName={birthday.firstName}
        lastName={birthday.lastName}
        birthday={birthday.birthday}
        onDeleteBirthday={props.onDeleteBirthday}
        onEdit={props.onEdit}
        birthdayObject={birthday}
      />
    ));

  return (
    <div className='tableContainer'>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>{listOfBirthdays}</tbody>
      </table>
    </div>
  );
};

export default BirthdayList;
