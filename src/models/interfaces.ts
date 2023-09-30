export interface Birthday {
  id: number;
  firstName: string;
  lastName: string;
  birthday: string;
}

export type NewBirthday = Omit<Birthday, 'id'>;
