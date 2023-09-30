import BirthdayListItem from './BirthdayListItem';
import { Birthday } from '../models/interfaces';

interface BirthdayListProps {
  birthdayList: Birthday[];
  onDeleteBirthday: (id: number) => void;
  onEdit: (birthday: Birthday) => void;
}

const BirthdayList = ({
  birthdayList,
  onDeleteBirthday,
  onEdit,
}: BirthdayListProps) => {
  const listOfBirthdays = birthdayList
    .sort()
    .map((birthday) => (
      <BirthdayListItem
        key={birthday.id}
        id={birthday.id}
        firstName={birthday.firstName}
        lastName={birthday.lastName}
        birthday={birthday.birthday}
        onDeleteBirthday={onDeleteBirthday}
        onEdit={onEdit}
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
