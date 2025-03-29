import React from 'react';

function DogCard({ imageUrl }) {


  return (
    <div className="dog-card">
      <img src={imageUrl} alt="Dog" className="dog-image" />

      <button onClick={() => addToBanList(breed.name)}>Ban this breed</button>
    </div>
  );
}

export default DogCard;
