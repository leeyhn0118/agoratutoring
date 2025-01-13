import { useState } from 'react';

const useStateWithReset = (initial) => {
  const [state, setState] = useState(initial);

  function resetState() {
    setState(initial);
  }

  return [state, setState, resetState];
};

export default useStateWithReset;
