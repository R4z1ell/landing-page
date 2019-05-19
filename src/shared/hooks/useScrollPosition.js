import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const useScrollPosition = () => {
  const [position, setPosition] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', throttle(handleScroll), 200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return position;
};

export default useScrollPosition;
