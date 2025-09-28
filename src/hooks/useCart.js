// src/hooks/useCart.js
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart from localStorage on first render
  useEffect(() => {
    const savedCart = localStorage.getItem("luxury-watch-cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  const saveCart = (items) => {
    localStorage.setItem("luxury-watch-cart", JSON.stringify(items));
  };

  // ✅ Add to cart (fixed duplicate toast issue)
  const addToCart = (product, quantity = 1) => {
    let message = "";

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      let newItems;

      if (existingItem) {
        newItems = prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        message = `${product.name} quantity updated 🛒`;
      } else {
        newItems = [...prevItems, { ...product, quantity }];
        message = `${product.name} added to cart 🛍️`;
      }

      saveCart(newItems);
      return newItems;
    });

    if (message) toast.success(message);
  };

  // ✅ Remove from cart
  const removeFromCart = (productId) => {
    let removedItem;

    setCartItems((prevItems) => {
      removedItem = prevItems.find((item) => item.id === productId);
      const newItems = prevItems.filter((item) => item.id !== productId);

      saveCart(newItems);
      return newItems;
    });

    if (removedItem) toast.error(`${removedItem.name} removed ❌`);
  };

  // ✅ Update quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    let updatedItem;

    setCartItems((prevItems) => {
      const newItems = prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );

      updatedItem = newItems.find((item) => item.id === productId);

      saveCart(newItems);
      return newItems;
    });

    if (updatedItem) {
      toast.success(`${updatedItem.name} set to ${updatedItem.quantity} 🔄`);
    }
  };

  // ✅ Clear cart
  const clearCart = () => {
    setCartItems([]);
    saveCart([]);

    toast("Cart cleared 🧹", {
      style: {
        background: "#333",
        color: "#fff",
        borderRadius: "8px",
        padding: "10px 16px",
      },
      icon: "🧹",
    });
  };

  // ✅ Get total price
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // ✅ Get total items
  const getCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
  };
};
