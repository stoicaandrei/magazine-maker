import React, { useContext } from 'react';

import { MagazineContext } from 'contexts';

import Prev from 'assets/images/prev_white.png';
import Next from 'assets/images/next_white.png';

const Navigation: React.FC = () => {
  const { goToNextPage, goToPrevPage, isFirstPage, isLastPage } = useContext(MagazineContext);

  let prevClass = 'btn btn-prev ';
  if (isFirstPage) prevClass += 'hidden';

  let nextClass = 'btn btn-next ';
  if (isLastPage) nextClass += 'hidden';

  return (
    <div className="navigation-container">
      <img onClick={goToPrevPage} className={prevClass} src={Prev} alt="prev" />
      <img onClick={goToNextPage} className={nextClass} src={Next} alt="next" />
    </div>
  );
};

export default Navigation;
