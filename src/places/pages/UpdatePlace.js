import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './PlaceForm.css';

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
      lat: 48.8583701,
      lng: 2.2922926,
    },
    creator: 'u2',
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlace.title,
        isValid: true,
      },
      description: {
        value: identifiedPlace.description,
        isValid: true,
      },
    },
    true
  );

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className='center'>
        <h2>Could not find place!</h2>
      </div>
    );
  }
  return (
    <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid Title!'
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialIsValid={formState.inputs.title.isValid}
      />

      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid Description (of at least 5 characters)!'
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialIsValid={formState.inputs.description.isValid}
      />
      <Button type='submit' disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
