import React, { createContext, useState } from 'react';

import { projectFirestore } from 'firebase_config';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { Magazine } from 'types';

type ContextProps = {
  fetching: boolean;
  magazines: Magazine[];
  error: any;
  currentMagazine?: Magazine;
  selectMagazine: (id: string) => void;
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

  return (
    <MagazineContext.Provider
      value={{ fetching, magazines: magazines || [], error, currentMagazine, selectMagazine }}
    >
      {children}
    </MagazineContext.Provider>
  );
};
