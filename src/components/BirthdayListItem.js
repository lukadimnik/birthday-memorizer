import React from "react";

const BirthdayListItem = (props) => {
  console.log(props.id);

  return <li>{`${props.firstName} ${props.lastName} ${props.birthday}`}</li>;
};

export default BirthdayListItem;
