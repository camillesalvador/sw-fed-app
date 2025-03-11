import axios from 'axios';
import { NextResponse } from 'next/server';

async function fetchAllPages(baseUrl: string) {
  const firstPage = await axios.get(baseUrl);
  const total = firstPage.data.count;
  const totalPages = Math.ceil(total / 10);

  // Create an array of requests for each page
  const pageRequests = Array.from({ length: totalPages }, (_, i) =>
    axios.get(`${baseUrl}?page=${i + 1}`)
  );

  const responses = await Promise.all(pageRequests);
  return responses.flatMap((res) => res.data.results);
}

export async function GET() {
  try {
    const [planets, films, species] = await Promise.all([
      // fetchAllPages('https://swapi.dev/api/people/'),
      fetchAllPages('https://swapi.dev/api/planets/'),
      fetchAllPages('https://swapi.dev/api/films/'),
      fetchAllPages('https://swapi.dev/api/species/'),
    ]);

    return NextResponse.json({
      // people,
      planets: planets,
      films: films,
      species: species,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
