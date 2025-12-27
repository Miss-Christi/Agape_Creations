import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      // --- CATEGORY FILTER STATE ---
      selectedCategory: 'All',
      setSelectedCategory: (category) => set({ selectedCategory: category }),

      // --- PRODUCT DRAWER STATE ---
      activeProduct: null,
      openProductDrawer: (product) => set({ activeProduct: product }),
      closeProductDrawer: () => set({ activeProduct: null }),

      // --- CART STATE ---
      cart: [],
      isCartOpen: false,
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

      addToCart: (product) => set((state) => {
        // Simple add to cart logic (No variants)
        const existingItem = state.cart.find((item) => item.id === product.id);

        if (existingItem) {
          return {
            cart: state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            isCartOpen: true,
          };
        }

        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
          isCartOpen: true,
        };
      }),

      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== productId),
      })),

      // Helper function for totals
      cartTotal: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + (item.basePrice * item.quantity), 0);
      },
    }),
    {
      name: 'agape-storage', 
      skipHydration: true,
      // CRITICAL FIX: Only persist the cart and category. 
      // Do NOT persist activeProduct (this prevents crashes if data changes).
      partialize: (state) => ({ 
        cart: state.cart, 
        selectedCategory: state.selectedCategory 
      }),
    }
  )
);