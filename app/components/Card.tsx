import Image from 'next/image';
import Modal from './Modal';
import { useState } from 'react';
import { Person } from '../types';

function getCharacterImage(name: string) {
  // Simple hash function to get a consistent number for each name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const imageId = Math.abs(hash % 1000); // Get a number between 0-999
  return `https://picsum.photos/seed/${imageId}/600/400`; // Random image based on hash
}

export default function Card({ person }: { person: Person }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="text-gray-700 dark:text-gray-400 hover:text-white basis-1/3 max-w-sm rounded-lg shadow-sm bg-[#1d1e1f] cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={getCharacterImage(person.name)}
          className="rounded-lg"
          alt={person.name}
          width="600"
          height="400"
          priority
        />
        <div className="p-5">
          <span className="font-normal">{person.name}</span>
        </div>
      </button>
      <Modal
        character={person}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
