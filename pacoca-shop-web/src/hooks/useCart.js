import { useState, useEffect } from 'react';

export function useCart() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('pacoca-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('pacoca-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('pacoca-cart');
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return { cart, addToCart, removeFromCart, clearCart, cartTotal };
}
