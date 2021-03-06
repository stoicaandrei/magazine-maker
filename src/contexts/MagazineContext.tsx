import React, { createContext, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useQuery } from 'hooks';

import { projectFirestore } from 'firebase_config';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { Magazine } from 'types';

type ContextProps = {
  fetching: boolean;
  magazines: Magazine[];
  error: any;
  currentMagazine?: Magazine;
  selectMagazine: (id: string) => void;
  currentPage: number;
  goToNextPage: () => void;
  goToPrevPage: () => void;
  jumpToPage: (page: number) => void;
  isFirstPage: boolean;
  isLastPage: boolean;
};

export const MagazineContext = createContext<ContextProps>({} as ContextProps);

export const MagazineProvider: React.FC = ({ children }) => {
  const [selectedId, setSelectedId] = useState('none');

  const magazinesRef = projectFirestore.collection('magazines');
  const magazinesQuery = magazinesRef.limit(10);
  const [magazines, fetching, error] = useCollectionData<Magazine>(magazinesQuery, {
    idField: 'id',
  });

  const currentMagazine = magazines?.find((item) => item.id === selectedId);
  const selectMagazine = (id: string) => setSelectedId(id);

  const query = useQuery();
  const lastPage = (currentMagazine?.pageUrls.length || 1) - 1;

  let currentPage = parseInt(query.page) || 0;
  if (currentPage < 0) currentPage = 0;
  if (currentPage > lastPage) currentPage = lastPage;

  const history = useHistory();

  const changePage = (page: number) => {
    history.push({ pathname: history.location.pathname, search: `?page=${page}` });
  };
  const goToNextPage = () => changePage(currentPage + 1);
  const goToPrevPage = () => changePage(currentPage - 1);
  const jumpToPage = (page: number) => changePage(page);

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === lastPage;

  const sortedMagazines = (magazines || []).sort((a, b) => (a.id < b.id ? 1 : -1));

  return (
    <MagazineContext.Provider
      value={{
        fetching,
        magazines: sortedMagazines,
        error,
        currentMagazine,
        selectMagazine,
        currentPage,
        goToNextPage,
        goToPrevPage,
        jumpToPage,
        isFirstPage,
        isLastPage,
      }}
    >
      {children}
    </MagazineContext.Provider>
  );
};
