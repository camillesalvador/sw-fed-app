'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Card from './components/Card';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import { Person } from './types';
import Filter from './components/Filter';

interface HomeClientProps {
  filters: { planets: object; films: object; species: object };
}

export default function HomeClient({ filters }: HomeClientProps) {
  const [people, setPeople] = useState<Person[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [total, setTotal] = useState(0);

  const fetchPeople = async () => {
    await axios
      .get('https://swapi.dev/api/people/', { params: { search, page } })
      .then((res) => {
        setPeople(res.data.results);
        setTotal(res.data.count);
      });
  };

  useEffect(() => {
    fetchPeople();
    console.log(filters);
  }, [page, search]);

  return (
    <div>
      <header className="flex justify-center w-full mb-12">
        <Image
          className="light:invert"
          src="/star-wars-logo.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </header>
      <div className="max-w-[104rem] gap-8 flex flex-col items-center">
        <div className="flex justify-between w-full">
          <Filter filters={filters} />
          <SearchBar onSearch={setSearch} />
        </div>
        <div className="flex flex-wrap justify-center px-12 gap-4">
          {people.map((person) => (
            <Card key={person.name} person={person} />
          ))}
        </div>
        <Pagination
          page={page}
          total={people.length}
          count={total}
          setNextPage={() => setPage(page + 1)}
          setPrevPage={() => setPage(page - 1)}
        />
      </div>
    </div>
  );
}
