import React from 'react';

import { Magazine } from 'types';

type Props = {
  item: Magazine;
};

const GalleryItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="magazine-container">
      <a href={`/magazine/${item.id}`} target="_blank" rel="noreferrer">
        <div
          className="cover"
          style={{ background: `url(${item.thumbnailUrl})`, backgroundSize: 'cover' }}
        />
        <div className="body">
          <div className="title">{item.title}</div>
        </div>
      </a>
    </div>
  );
};

export default GalleryItem;
