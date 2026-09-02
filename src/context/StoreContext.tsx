import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { 
  Product, 
  CartItem, 
  FilterState, 
  Order, 
  User, 
  ToastMessage, 
  ViewName,
  CustomerInfo,
  ShippingAddress,
  PaymentMethod
} from '../types';
import { MOCK_PRODUCTS } from '../data/products';

const DEFAULT_FILTERS: FilterState = {
  sport: 'All',
  productTypes: [],
  priceRange: [0, 350],
  brands: [],
  sizes: [],
  genders: [],
  minRating: 0,
  inStockOnly: false,
  searchQuery: '',
  sortBy: 'relevance'
};

interface StoreContextType {
  // Navigation & View State
  currentView: ViewName;
  setCurrentView: (view: ViewName) => void;
  selectedProductId: string | null;
  viewProductDetails: (productId: string) => void;
  
  // Products & Filtering
  products: Product[];
  filteredProducts: Product[];
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleCategorySelect: (sportName: string) => void;
  
  // Cart
  cartItems: CartItem[];
  addToCart: (product: Product, selectedSize?: string, selectedColor?: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  clearCart: () => void;
  cartSubtotal: number;
  cartDiscount: number;
  cartShipping: number;
  cartTotal: number;
  cartCount: number;
  
  // Wishlist
  wishlistIds: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  moveWishlistToCart: (productId: string) => void;
  
  // User & Orders
  currentUser: User | null;
  orders: Order[];
  recentOrder: Order | null;
  placeOrder: (customer: CustomerInfo, shippingAddress: ShippingAddress, paymentMethod: PaymentMethod) => Order;
  login: (email: string) => void;
  logout: () => void;
  
  // Toast Feedback
  toasts: ToastMessage[];
  addToast: (text: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  removeToast: (id: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // View State
  const [currentView, setCurrentView] = useState<ViewName>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Search & Filters
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Cart (Local Storage Persisted)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('apex_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist (Local Storage Persisted)
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('apex_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Orders (Local Storage Persisted)
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('apex_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [recentOrder, setRecentOrder] = useState<Order | null>(null);

  // User Auth State
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('apex_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Toast System
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('apex_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('apex_wishlist', JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  useEffect(() => {
    localStorage.setItem('apex_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('apex_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('apex_user');
    }
  }, [currentUser]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedProductId]);

  const addToast = (text: string, type: 'success' | 'info' | 'warning' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts(prev => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // View Navigation Helpers
  const viewProductDetails = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentView('product-detail');
  };

  const handleCategorySelect = (sportName: string) => {
    setFilters(prev => ({
      ...DEFAULT_FILTERS,
      sport: sportName
    }));
    setSearchQuery('');
    setCurrentView('catalogue');
  };

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setSearchQuery('');
  };

  // Filter & Search Evaluation
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      // Search Query Matching
      const query = searchQuery.trim().toLowerCase();
      if (query) {
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesSport = product.sport.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesType = product.productType.toLowerCase().includes(query);
        if (!matchesName && !matchesSport && !matchesBrand && !matchesDesc && !matchesType) {
          return false;
        }
      }

      // Sport Category Filter
      if (filters.sport !== 'All' && product.sport !== filters.sport) {
        return false;
      }

      // Product Type Filter
      if (filters.productTypes.length > 0 && !filters.productTypes.includes(product.productType)) {
        return false;
      }

      // Price Range Filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Brand Filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false;
      }

      // Size Filter
      if (filters.sizes.length > 0) {
        if (!product.sizes || !product.sizes.some(s => filters.sizes.includes(s))) {
          return false;
        }
      }

      // Gender Filter
      if (filters.genders.length > 0 && !filters.genders.includes(product.gender) && product.gender !== 'Unisex') {
        return false;
      }

      // Rating Filter
      if (product.rating < filters.minRating) {
        return false;
      }

      // Stock Filter
      if (filters.inStockOnly && !product.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        case 'popularity':
          return (b.popularityScore || 0) - (a.popularityScore || 0);
        case 'relevance':
        default:
          return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      }
    });
  }, [filters, searchQuery]);

  // Cart Functions
  const addToCart = (product: Product, selectedSize?: string, selectedColor?: string, quantity: number = 1) => {
    if (!product.inStock) {
      addToast('Sorry, this product is currently out of stock.', 'error');
      return;
    }

    const size = selectedSize || (product.sizes ? product.sizes[0] : undefined);
    const color = selectedColor || (product.colors ? product.colors[0].name : undefined);
    const cartItemId = `${product.id}-${size || 'nosize'}-${color || 'nocolor'}`;

    setCartItems(prev => {
      const existing = prev.find(item => item.id === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { id: cartItemId, product, selectedSize: size, selectedColor: color, quantity }];
    });

    addToast(`Added "${product.name}" to your shopping cart!`, 'success');
  };

  const removeFromCart = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== cartItemId));
    addToast('Item removed from cart.', 'info');
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.id === cartItemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Cart Calculations
  const cartSubtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }, [cartItems]);

  const cartDiscount = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      if (item.product.originalPrice) {
        const diff = item.product.originalPrice - item.product.price;
        return sum + (diff * item.quantity);
      }
      return sum;
    }, 0);
  }, [cartItems]);

  const cartShipping = useMemo(() => {
    if (cartItems.length === 0) return 0;
    return cartSubtotal >= 75 ? 0 : 8.99;
  }, [cartItems, cartSubtotal]);

  const cartTotal = useMemo(() => {
    return cartSubtotal + cartShipping;
  }, [cartSubtotal, cartShipping]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  // Wishlist Functions
  const toggleWishlist = (productId: string) => {
    const prod = MOCK_PRODUCTS.find(p => p.id === productId);
    setWishlistIds(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        addToast(`Removed "${prod?.name || 'Item'}" from wishlist.`, 'info');
        return prev.filter(id => id !== productId);
      } else {
        addToast(`Saved "${prod?.name || 'Item'}" to your wishlist!`, 'success');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlistIds.includes(productId);

  const moveWishlistToCart = (productId: string) => {
    const product = MOCK_PRODUCTS.find(p => p.id === productId);
    if (product) {
      addToCart(product);
      toggleWishlist(productId);
    }
  };

  // Order Placement
  const placeOrder = (customer: CustomerInfo, shippingAddress: ShippingAddress, paymentMethod: PaymentMethod): Order => {
    const orderId = 'AS' + Math.floor(100000 + Math.random() * 900000).toString();
    const newOrder: Order = {
      orderId,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      items: [...cartItems],
      subtotal: cartSubtotal,
      discount: cartDiscount,
      shipping: cartShipping,
      total: cartTotal,
      customer,
      shippingAddress,
      paymentMethod,
      status: 'Processing',
      estimatedDelivery: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };

    setOrders(prev => [newOrder, ...prev]);
    setRecentOrder(newOrder);
    clearCart();
    setCurrentView('order-confirmation');
    addToast(`Order #${orderId} placed successfully!`, 'success');
    return newOrder;
  };

  // Auth Simulation
  const login = (email: string) => {
    const mockUser: User = {
      id: 'usr-101',
      name: email.split('@')[0].toUpperCase() || 'Alex Turner',
      email: email,
      phone: '+1 (555) 234-5678',
      addresses: [
        {
          id: 'addr-1',
          name: 'Home',
          street: '742 Evergreen Terrace',
          city: 'Springfield',
          state: 'OR',
          postalCode: '97477',
          country: 'United States',
          isDefault: true
        }
      ]
    };
    setCurrentUser(mockUser);
    setCurrentView('account');
    addToast(`Welcome back, ${mockUser.name}!`, 'success');
  };

  const logout = () => {
    setCurrentUser(null);
    setCurrentView('home');
    addToast('Logged out successfully.', 'info');
  };

  return (
    <StoreContext.Provider
      value={{
        currentView,
        setCurrentView,
        selectedProductId,
        viewProductDetails,
        products: MOCK_PRODUCTS,
        filteredProducts,
        filters,
        setFilters,
        resetFilters,
        searchQuery,
        setSearchQuery,
        handleCategorySelect,
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartSubtotal,
        cartDiscount,
        cartShipping,
        cartTotal,
        cartCount,
        wishlistIds,
        toggleWishlist,
        isInWishlist,
        moveWishlistToCart,
        currentUser,
        orders,
        recentOrder,
        placeOrder,
        login,
        logout,
        toasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
