import React from "react";

const BirthdayListItem = (props) => {
  console.log(props.id);

  const deleteBirthdayHandler = () => {
    props.onDeleteBirthday(props.id);
  };

  return (
    <li>
      {`${props.firstName} ${props.lastName} ${props.birthday}`}{" "}
      <button>Edit</button>{" "}
      <button onClick={deleteBirthdayHandler}>Delete</button>
    </li>
  );
};

export default BirthdayListItem;
