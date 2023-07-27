import { MovieList } from '@/app/components/MovieList';
import { Bar, Page } from '@ui5/webcomponents-react';
import { SearchMovie } from './components/SearchMovie';

export default async function Home() {
  const response = await fetch(`http:localhost:3002/?s="toy story"`, {
    next: { revalidate: 10 },
  });
  const movieList = await response.json();

  return (
    <>
      <Page header={<Bar startContent={<SearchMovie />} />}>
        <MovieList list={movieList.list} />
      </Page>
    </>
  );
}
