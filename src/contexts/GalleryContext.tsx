import React, { createContext, useContext } from 'react';

import { projectFirestore } from 'firebase_config';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { MagazinePreview } from 'types';

type ContextProps = {
  fetching: boolean;
  gallery: MagazinePreview[];
  error: any;
};

export const GalleryContext = createContext<ContextProps>({} as ContextProps);

export const GalleryProvider: React.FC = ({ children }) => {
  const galleryRef = projectFirestore.collection('gallery');
  const galleryQuery = galleryRef.limit(10);
  const [gallery, fetching, error] = useCollectionData<MagazinePreview>(galleryQuery, {
    idField: 'id',
  });

  return (
    <GalleryContext.Provider value={{ fetching, gallery: gallery || [], error }}>
      {children}
    </GalleryContext.Provider>
  );
};
