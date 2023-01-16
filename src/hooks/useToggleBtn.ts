import { useState } from 'react';

export const useToggleBtn = (initialState = false) => {
  const [isShown, setIsShown] = useState(initialState);

  const show = (): void => setIsShown(true);
  const hide = (): void => setIsShown(false);

  return { isShown, show, hide };
};
