import { useEffect, useState } from 'react';

function getLocalCart<Type>(key: string, defaultValue: Type) {
  const localCartJSON = localStorage.getItem(key);
  if (localCartJSON) return JSON.parse(localCartJSON);
  return defaultValue;
}

export const useLocalStorage = <Type>(
  key: string,
  defaultValue: Type
): [Type, React.Dispatch<React.SetStateAction<Type>>] => {
  const [cartItems, setCartItems] = useState<Type>(() => {
    return getLocalCart(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(cartItems));
  }, [cartItems]);

  return [cartItems, setCartItems];
};
