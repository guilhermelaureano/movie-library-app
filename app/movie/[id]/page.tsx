import { DynamicPage, DynamicPageTitle } from '@ui5/webcomponents-react';
import Image from 'next/image';
import { Suspense } from 'react';

interface MovieDetailsProps {
  id: string;
}

export default async function MovieDetails({ id }: MovieDetailsProps) {
  const response = await fetch(`http:localhost:3002/movie/?id=tt0114709`, {
    next: { revalidate: 10 },
  });
  const movie = await response.json();

  if (!movie) {
    return (
      <Suspense>
        <h1>loading ...</h1>
      </Suspense>
    );
  }

  return (
    <>
      <DynamicPage
        showHideHeaderButton={false}
        headerTitle={<DynamicPageTitle header={movie.title} />}
      >
        <div style={{ display: 'flex', gap: '10px 20px' }}>
          <div>
            <h3>Descrição</h3>
            <p>{movie.plot}</p>
            <h5>Direção: {movie.director}</h5>
            <h5>Escrito por: {movie.writer}</h5>
            <h5>Atores: {movie.actors}</h5>
            <h6>Genero: {movie.genre}</h6>
            <h6>Duração: {movie.runtime}</h6>
            <h6>lançamento: {movie.released}</h6>

            {movie.awars && <p>Premiações: {movie.awars}</p>}
          </div>
          <div>
            <h3>Poster</h3>
            <Image
              src={movie.poster}
              width={170}
              height={250}
              alt={movie.title}
            />
            <p>
              <strong>Rotten Tomatoes: </strong>
              {movie.tomatoes}
            </p>
          </div>
        </div>
      </DynamicPage>
    </>
  );
}
