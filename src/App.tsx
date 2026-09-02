import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/Toast';

import { HomeView } from './views/HomeView';
import { CatalogueView } from './views/CatalogueView';
import { ProductDetailView } from './views/ProductDetailView';
import { CartView } from './views/CartView';
import { CheckoutView } from './views/CheckoutView';
import { OrderConfirmationView } from './views/OrderConfirmationView';
import { WishlistView } from './views/WishlistView';
import { AccountView } from './views/AccountView';

const MainContent: React.FC = () => {
  const { currentView } = useStore();

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView />;
      case 'catalogue':
        return <CatalogueView />;
      case 'product-detail':
        return <ProductDetailView />;
      case 'cart':
        return <CartView />;
      case 'checkout':
        return <CheckoutView />;
      case 'order-confirmation':
        return <OrderConfirmationView />;
      case 'wishlist':
        return <WishlistView />;
      case 'account':
      case 'login':
      case 'register':
        return <AccountView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Accessibility Skip Link */}
      <a 
        href="#main-content" 
        style={{ 
          position: 'absolute', 
          top: '-100px', 
          left: '1rem', 
          backgroundColor: 'var(--primary)', 
          color: '#FFFFFF', 
          padding: '0.5rem 1rem', 
          borderRadius: '4px',
          zIndex: 10000,
          transition: 'top 0.2s ease'
        }}
        onFocus={(e) => e.currentTarget.style.top = '1rem'}
        onBlur={(e) => e.currentTarget.style.top = '-100px'}
      >
        Skip to main content
      </a>

      <Header />
      
      <main id="main-content" style={{ flex: 1 }}>
        {renderView()}
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <StoreProvider>
      <MainContent />
    </StoreProvider>
  );
};

export default App;
