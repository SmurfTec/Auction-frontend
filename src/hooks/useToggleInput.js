import { useState } from 'react';

const useToggleInput = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggleInput = (e) => {
    setState((st) => !st);
  };

  const resetState = () => {
    setState(initialState);
  };

  return [state, toggleInput, setState];
};

export default useToggleInput;
