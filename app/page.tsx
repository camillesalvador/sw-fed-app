import axios from 'axios';
import HomeClient from './HomeClient';

export default async function Home() {
  // SSR data fetching
  const res = await axios.get('http://localhost:3000/api/filters');
  const { planets, films, species } = res.data;

  return <HomeClient filters={{ planets, films, species }} />;
}
