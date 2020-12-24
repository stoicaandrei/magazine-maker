import React from 'react';

import { Magazine } from 'types';

type Props = {
  item: Magazine;
};

const GalleryItem: React.FC<Props> = ({ item }) => {
  const backgroundStyle = { background: `url(${item.thumbnailUrl})`, backgroundSize: 'cover' };
  const magazineLink = `/magazine/${item.id}?page=0`;

  return (
    <div className="magazine-container">
      <a href={magazineLink} target="_blank" rel="noreferrer">
        <div className="cover" style={backgroundStyle} />
        <div className="body">
          <div className="title">{item.title}</div>
        </div>
      </a>
    </div>
  );
};

export default GalleryItem;
