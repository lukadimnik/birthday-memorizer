import React from "react";
import BirthdayListItem from "./BirthdayListItem";

const birthdayList = (props) => {
  const listOfBirthdays = props.birthdayList.map((birthday) => (
    <BirthdayListItem
      key={birthday.id}
      id={birthday.id}
      firstName={birthday.firstName}
      lastName={birthday.lastName}
      birthday={birthday.birthday}
      onDeleteBirthday={props.onDeleteBirthday}
    />
  ));

  console.log("birthdayList: ", birthdayList);

  return <ul>{listOfBirthdays}</ul>;
};

export default birthdayList;
