import { IconButton } from '@material-ui/core';
import { useEffect, useState } from 'react';
// import { BiArrowFromBottom } from 'react-icons/bi';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
// import { classNames } from '../../utils';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [offsetValue, setOffsetValue] = useState(window.pageYOffset);

  useEffect(() => {
    console.log('useEffect Func');
    window.addEventListener('scroll', function (e) {
      console.log('isVisible', e);
      setOffsetValue(window.pageYOffset);

      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };
  }, [offsetValue]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <IconButton
        color='primary'
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: 20,
          opacity: isVisible ? 1 : 0,
        }}
        // className={classNames(
        //   isVisible ? 'opacity-100' : 'opacity-0',
        //   'inline-flex items-center p-3 rounded-full shadow-sm text-white bg-pink-600 transition-opacity hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
        // )}
      >
        <ArrowUpwardIcon />
        {/* <BiArrowFromBottom className='h-6 w-6' aria-hidden='true' /> */}
      </IconButton>
    </>
  );
};
