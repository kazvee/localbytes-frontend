import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Centre of the Universe',
    description: 'The centre of the universe is the centre of the universe.',
    imageUrl: 'https://picsum.photos/200/300?random=1',
    address: 'Bank Street & Sixth Street, Wallace, Idaho, 83873, USA',
    location: {
      lat: 47.4716024,
      lng: -115.9239073,
    },
    creator: 'u1',
  },

  {
    id: 'p2',
    title: 'Eiffel Tower',
    description: 'The Eiffel Tower is in France.',
    imageUrl: 'https://picsum.photos/200/300?random=2',
    address: 'Champ de Mars, 5 Av. Anatole France, 75007 Paris, France',
    location: {
      lat: 51.0707688,
      lng: -122.849112,
    },
    creator: 'u2',
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
