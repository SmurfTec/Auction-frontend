import { useState } from 'react';

const useToggleInput = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggleInput = (e) => {
    setState((st) => !st);
  };

  return [state, toggleInput, setState];
};

export default useToggleInput;
