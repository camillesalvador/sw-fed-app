'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Modal({ isOpen, onClose, character }) {
  const [homeworld, setHomeworld] = useState(null);

  useEffect(() => {
    if (character.homeworld) {
      axios
        .get(character.homeworld)
        .then((res) => setHomeworld(res.data))
        .catch((error) => console.error('Failed to fetch homeworld:', error));
    }
  }, [character.homeworld]);

  if (!isOpen) return null;

  // Convert height from cm to meters
  const heightInMeters = (character.height / 100).toFixed(2);

  // Format created date
  const createdDate = new Date(character.created).toLocaleDateString('en-GB');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#1d1e1f] p-6 rounded-lg w-96 shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-white"
        >
          ✖
        </button>

        {/* Character Details */}
        <h2 className="text-2xl font-bold mb-4">{character.name}</h2>
        <p>
          <strong>Height:</strong> {heightInMeters} m
        </p>
        <p>
          <strong>Mass:</strong> {character.mass} kg
        </p>
        <p>
          <strong>Birth Year:</strong> {character.birth_year}
        </p>
        <p>
          <strong>Films Appeared In:</strong> {character.films.length}
        </p>
        <p>
          <strong>Date Added:</strong> {createdDate}
        </p>

        {/* Homeworld Information */}
        {homeworld ? (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">
              Homeworld: {homeworld.name}
            </h3>
            <p>
              <strong>Terrain:</strong> {homeworld.terrain}
            </p>
            <p>
              <strong>Climate:</strong> {homeworld.climate}
            </p>
            <p>
              <strong>Number of Residents:</strong> {homeworld.residents.length}
            </p>
          </div>
        ) : (
          <p className="text-sm text-gray-500 mt-2">
            Loading homeworld details...
          </p>
        )}
      </div>
    </div>
  );
}
