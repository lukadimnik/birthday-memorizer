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
    <div>
      <ul>{listOfBirthdays}</ul>
    </div>
  );
};

export default BirthdayList;
