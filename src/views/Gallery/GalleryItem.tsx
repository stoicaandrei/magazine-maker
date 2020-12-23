import React from 'react';

import { MagazinePreview } from 'types';

type Props = {
  item: MagazinePreview;
};

const GalleryItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="magazine-container">
      <a href={`/${item.id}`} target="_blank">
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
