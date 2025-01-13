import { useState, useEffect } from 'react';

const useAccordion = (element, defaultValue) => {
  const [open, setOpen] = useState(defaultValue);
  const [scrollHeight, setScrollHeight] = useState(0);

  const getScrollHeight = () => {
    setScrollHeight(element?.current?.scrollHeight || 0);
  };

  useEffect(() => {
    getScrollHeight();
    window.addEventListener('resize', getScrollHeight);

    return () => {
      window.removeEventListener('resize', getScrollHeight);
    };
  });

  const maxHeight = `${open ? scrollHeight : 0}px`;
  const toggleOpen = () => setOpen(!open);

  return [maxHeight, open, toggleOpen];
};

export default useAccordion;
