import React from 'react';

function DogCard({ dog, addToBanList }) {
  if (!dog) return null; // Just in case dog data is not available yet

  const breed = dog.breeds[0]; // Assuming there's at least one breed in the array
  const { url, breeds } = dog;

  return (
    <div className="dog-card">
      <img src={url} alt="Dog" className="dog-image" />
      <h2>{breed.name}</h2>
      <p>{breed.description}</p>
      <p><strong>Temperament:</strong> {breed.temperament}</p>
      <p><strong>Life Span:</strong> {breed.life_span} years</p>

      <button onClick={() => addToBanList(breed.name)}>Ban this breed</button>
    </div>
  );
}

export default DogCard;
