type GetFullName = {
  firstName: string;
  lastName: string;
};

export const getFullName = ({ firstName, lastName }: GetFullName) => {
  return [firstName, lastName].join(' ');
};
