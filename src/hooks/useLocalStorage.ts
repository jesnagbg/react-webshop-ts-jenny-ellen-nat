import { useEffect, useState } from 'react';

function getLocalCart(key: string) {
  const localCartJSON = localStorage.getItem(key);
  if (localCartJSON) return JSON.parse(localCartJSON);
  return [];
}

export const useLocalStorage = <Type>(
  key: string
): [Type, React.Dispatch<React.SetStateAction<Type>>] => {
  const [cartItems, setCartItems] = useState<Type>(() => {
    return getLocalCart(key);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(cartItems));
  }, [cartItems]);

  return [cartItems, setCartItems];
};
