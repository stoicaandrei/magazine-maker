import React, { createContext } from 'react';

import { projectFirestore } from 'firebase_config';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { Magazine } from 'types';

type ContextProps = {
  fetching: boolean;
  magazines: Magazine[];
  error: any;
};

export const MagazineContext = createContext<ContextProps>({} as ContextProps);

export const MagazineProvider: React.FC = ({ children }) => {
  const magazinesRef = projectFirestore.collection('magazines');
  const magazinesQuery = magazinesRef.limit(10);
  const [magazines, fetching, error] = useCollectionData<Magazine>(magazinesQuery, {
    idField: 'id',
  });

  return (
    <MagazineContext.Provider value={{ fetching, magazines: magazines || [], error }}>
      {children}
    </MagazineContext.Provider>
  );
};
