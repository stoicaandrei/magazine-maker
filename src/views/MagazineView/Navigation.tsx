import React, { useContext } from 'react';

import { MagazineContext } from 'contexts';

import Prev from 'assets/images/prev_white.png';
import Next from 'assets/images/next_white.png';

const Navigation: React.FC = () => {
  const { goToNextPage, goToPrevPage } = useContext(MagazineContext);

  return (
    <div className="navigation-container">
      {/*<img className="btn btn-prev hidden" src={Prev} alt="prev" />*/}
      <img onClick={goToPrevPage} className="btn btn-prev" src={Prev} alt="prev" />
      <img onClick={goToNextPage} className="btn btn-next" src={Next} alt="next" />
    </div>
  );
};

export default Navigation;
