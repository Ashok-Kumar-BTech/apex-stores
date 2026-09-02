import React from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

export const WishlistView: React.FC = () => {
  const { wishlistIds, products, moveWishlistToCart, toggleWishlist, handleCategorySelect } = useStore();

  const savedProducts = products.filter(p => wishlistIds.includes(p.id));

  if (savedProducts.length === 0) {
    return (
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem', textAlign: 'center' }}>
        <div 
          className="card" 
          style={{ 
            maxWidth: '500px', 
            margin: '0 auto', 
            padding: '4rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem'
          }}
        >
          <div 
            style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--sale-light)', 
              color: 'var(--sale-red)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
          >
            <Heart size={40} />
          </div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 900 }}>Your Wishlist is Empty</h1>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Save your favorite sports footwear, equipment, and gear here to review or purchase later.
          </p>
          <button 
            onClick={() => handleCategorySelect('All')} 
            className="btn btn-primary btn-lg" 
            style={{ marginTop: '0.5rem' }}
          >
            <span>Browse Products</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
      
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 900 }}>My Wishlist ({savedProducts.length})</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Saved gear ready for your next training session.</p>
      </div>

      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
          gap: '1.75rem' 
        }}
      >
        {savedProducts.map(product => (
          <div key={product.id} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <ProductCard product={product} />
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <button
                onClick={() => moveWishlistToCart(product.id)}
                className="btn btn-primary btn-sm"
                style={{ flex: 1 }}
              >
                <ShoppingBag size={14} />
                <span>Move to Cart</span>
              </button>
              <button
                onClick={() => toggleWishlist(product.id)}
                className="btn btn-secondary btn-sm"
                aria-label="Remove from wishlist"
              >
                <Trash2 size={14} color="var(--sale-red)" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
