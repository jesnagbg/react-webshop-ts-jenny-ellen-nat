import { useEffect, useState } from 'react';
import { CartItem } from '../../data';

function getLocalCart() {
  const localCartJSON = localStorage.getItem('pieceByPieceCart');
  if (localCartJSON) return JSON.parse(localCartJSON);
  return [];
}

export const useLocalCart = (): [
  CartItem[],
  React.Dispatch<React.SetStateAction<CartItem[]>>
] => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    return getLocalCart();
  });

  useEffect(() => {
    localStorage.setItem('pieceByPieceCart', JSON.stringify(cartItems));
  }, [cartItems]);

  return [cartItems, setCartItems];
};
