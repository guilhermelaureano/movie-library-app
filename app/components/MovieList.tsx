'use client';

import {
  List,
  ListItemType,
  ListPropTypes,
  StandardListItem,
} from '@ui5/webcomponents-react';
import { useRouter } from 'next/navigation';

interface MovieListProps {
  list: [
    {
      Title: string;
      Year: string;
      imdbID: string;
      Type: string;
      Poster: string;
    },
  ];
}

export function MovieList({ list }: MovieListProps) {
  const router = useRouter();
  const handleClick: ListPropTypes['onItemClick'] = event => {
    router.push(`/movie/${event.detail.item.dataset.id}`);
  };

  return (
    <List onItemClick={handleClick}>
      {list.map(movie => {
        return (
          <StandardListItem
            key={movie.imdbID}
            data-id={movie.imdbID}
            type={ListItemType.Navigation}
          >
            {movie.Title}
          </StandardListItem>
        );
      })}
    </List>
  );
}
