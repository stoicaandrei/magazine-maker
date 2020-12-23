import React, { useContext } from 'react';

import { List } from 'antd';

import { GalleryContext } from 'contexts';

const Gallery: React.FC = () => {
  const { gallery } = useContext(GalleryContext);

  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={gallery}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <p>{item.title}</p>
            {/*<img alt="image cover" src={item.thumbnailUrl} />*/}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Gallery;
