import React, { useContext } from 'react';

import { List } from 'antd';

import { GalleryContext } from 'contexts';

import GalleryItem from './GalleryItem';

const Gallery: React.FC = () => {
  const { gallery } = useContext(GalleryContext);

  return <div className="gallery-container">{gallery.map((item) => GalleryItem({ item }))}</div>;
};

export default Gallery;
