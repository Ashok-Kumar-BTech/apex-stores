import React from 'react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';
import { Star, Heart, ShoppingBag, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { viewProductDetails, addToCart, toggleWishlist, isInWishlist } = useStore();
  const inWishlist = isInWishlist(product.id);

  return (
    <div 
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative'
      }}
    >
      {/* Image & Overlay Container */}
      <div 
        style={{
          position: 'relative',
          paddingTop: '80%', /* 5:4 aspect ratio */
          backgroundColor: '#F1F5F9',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
        onClick={() => viewProductDetails(product.id)}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />

        {/* Badges */}
        <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', zIndex: 10 }}>
          {product.discountPercent && (
            <span className="badge badge-sale">
              {product.discountPercent}% OFF
            </span>
          )}
          {product.isNew && (
            <span className="badge badge-accent">
              NEW
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(4px)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: inWishlist ? 'var(--sale-red)' : 'var(--text-muted)',
            transition: 'transform 0.2s ease, color 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Heart size={18} fill={inWishlist ? 'var(--sale-red)' : 'none'} />
        </button>

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '1rem',
              letterSpacing: '0.05em',
              zIndex: 5
            }}
          >
            OUT OF STOCK
          </div>
        )}
      </div>

      {/* Product Content Body */}
      <div 
        style={{
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        {/* Category & Rating Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {product.sport} • {product.brand}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-main)' }}>
            <Star size={14} fill="#F59E0B" color="#F59E0B" />
            <span>{product.rating.toFixed(1)}</span>
            <span style={{ color: 'var(--text-light)', fontWeight: 400 }}>({product.reviewCount})</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 
          onClick={() => viewProductDetails(product.id)}
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            lineHeight: 1.35,
            color: 'var(--text-main)',
            marginBottom: '0.75rem',
            cursor: 'pointer',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            height: '2.7em'
          }}
        >
          {product.name}
        </h3>

        {/* Price & Buy Action Row */}
        <div 
          style={{
            marginTop: 'auto',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', textDecoration: 'line-through' }}>
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className={product.inStock ? "btn btn-primary btn-sm" : "btn btn-secondary btn-sm"}
            style={{ borderRadius: 'var(--radius-md)' }}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={16} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
