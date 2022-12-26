import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Little Kitten',
      image: 'http://placekitten.com/200/300',
      places: '3',
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
