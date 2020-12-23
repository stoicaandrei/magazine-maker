import React, { useContext } from 'react';

import { MagazineContext } from 'contexts';

import GalleryItem from './GalleryItem';

const Gallery: React.FC = () => {
  const { magazines } = useContext(MagazineContext);

  return <div className="gallery-container">{magazines.map((item) => GalleryItem({ item }))}</div>;
};

export default Gallery;
