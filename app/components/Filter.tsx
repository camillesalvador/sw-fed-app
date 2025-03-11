import { useState } from 'react';

interface FilterProps {
  filters: any;
}

const optionComponent = (filter: any) => {
  if (filter === 'planets') {
    return <option key={filter.name}>{filter.name}</option>;
  } else if (filter === 'films') {
    return <option key={filter.title}>{filter.title}</option>;
  } else if (filter === 'species') {
    return <option key={filter.name}>{filter.name}</option>;
  }
};

export default function Filter({ filters }: FilterProps) {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [subFilter, setSubFilter] = useState([]);
  const [selectedSubFilter, setSelectedSubFilter] = useState('');

  const handleFilterChange = (e: any) => {
    setSelectedFilter(e.target.value);
    setSubFilter(filters[e.target.value]);
    console.log(e.target.value);
    console.log(filters);
    console.log(subFilter);
  };

  return (
    <form className="max-w-sm mx-auto flex">
      <div className="flex">
        <label className="sr-only">Choose a Filter</label>
        <select
          id="filters"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="">Choose a filter</option>
          {Object.keys(filters).map((filter: any) => (
            <option key={filter}>{filter}</option>
          ))}
        </select>
      </div>
      <div className="flex">
        <label className="sr-only">Choose {selectedFilter}</label>
        <select
          id="filters"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedSubFilter}
          onChange={(e) => setSelectedSubFilter(e.target.value)}
        >
          <option value="">Choose {selectedFilter}</option>
          {subFilter.map((subFilter: any) => optionComponent(subFilter))}
        </select>
      </div>
    </form>
  );
}
