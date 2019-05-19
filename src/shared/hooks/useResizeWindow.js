import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const useResizeWindow = () => {
  const [resize, setResize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setResize(window.innerWidth);
    };

    window.addEventListener('resize', throttle(handleResize), 500);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return resize;
};

export default useResizeWindow;
