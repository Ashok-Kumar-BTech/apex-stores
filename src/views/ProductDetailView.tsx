import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { 
  Star, 
  Heart, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Check, 
  Plus, 
  Minus,
  ChevronRight,
  Zap,
  ArrowLeft
} from 'lucide-react';

export const ProductDetailView: React.FC = () => {
  const { 
    selectedProductId, 
    products, 
    addToCart, 
    toggleWishlist, 
    isInWishlist, 
    setCurrentView,
    handleCategorySelect
  } = useStore();

  const product = products.find(p => p.id === selectedProductId) || products[0];

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes ? product.sizes[0] : ''
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors ? product.colors[0].name : ''
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'shipping'>('desc');

  const inWishlist = isInWishlist(product.id);

  // Related products from same category
  const relatedProducts = products
    .filter(p => p.sport === product.sport && p.id !== product.id)
    .slice(0, 4);

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setCurrentView('checkout');
  };

  return (
    <div className="container" style={{ paddingTop: '1.5rem', paddingBottom: '4rem' }}>
      
      {/* Breadcrumb Navigation */}
      <nav 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.5rem', 
          fontSize: '0.85rem', 
          color: 'var(--text-muted)',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}
        aria-label="Breadcrumb"
      >
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('home'); }}>Home</a>
        <ChevronRight size={14} />
        <a href="#" onClick={(e) => { e.preventDefault(); handleCategorySelect('All'); }}>Catalogue</a>
        <ChevronRight size={14} />
        <a href="#" onClick={(e) => { e.preventDefault(); handleCategorySelect(product.sport); }}>{product.sport}</a>
        <ChevronRight size={14} />
        <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{product.name}</span>
      </nav>

      {/* Main Detail Grid (Gallery + Details) */}
      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3rem',
          marginBottom: '4rem'
        }}
      >
        
        {/* Left Column: Image Gallery */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Main Large Image */}
          <div 
            className="card"
            style={{ 
              position: 'relative', 
              paddingTop: '80%', 
              backgroundColor: '#F8FAFC',
              overflow: 'hidden'
            }}
          >
            <img
              src={activeImage || product.image}
              alt={product.name}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            {product.discountPercent && (
              <span className="badge badge-sale" style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                {product.discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Gallery Thumbnails */}
          {product.gallery && product.gallery.length > 1 && (
            <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto' }}>
              {product.gallery.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: activeImage === imgUrl ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                    opacity: activeImage === imgUrl ? 1 : 0.7,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <img src={imgUrl} alt={`${product.name} view ${idx+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Information & Purchase Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Category & Brand Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {product.sport} • {product.brand}
            </span>
            <span className={product.inStock ? "badge badge-accent" : "badge badge-sale"}>
              {product.inStock ? `In Stock (${product.stockQuantity} available)` : 'Out of Stock'}
            </span>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: '1.85rem', fontWeight: 900, lineHeight: 1.25 }}>
            {product.name}
          </h1>

          {/* Rating & Reviews */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              {[1,2,3,4,5].map(star => (
                <Star 
                  key={star} 
                  size={18} 
                  fill={star <= Math.floor(product.rating) ? "#F59E0B" : "none"} 
                  color="#F59E0B" 
                />
              ))}
            </div>
            <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{product.rating.toFixed(1)}</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>({product.reviewCount} verified athlete reviews)</span>
          </div>

          {/* Pricing */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', margin: '0.5rem 0' }}>
            <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-main)' }}>
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span style={{ fontSize: '1.2rem', color: 'var(--text-light)', textDecoration: 'line-through' }}>
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            {product.discountPercent && (
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--sale-red)' }}>
                Save ${(product.originalPrice! - product.price).toFixed(2)}
              </span>
            )}
          </div>

          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
            {product.description}
          </p>

          <hr style={{ borderColor: 'var(--border-color)', margin: '0.5rem 0' }} />

          {/* Color Selector */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '0.5rem' }}>
                Color: <span style={{ color: 'var(--text-main)' }}>{selectedColor}</span>
              </label>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {product.colors.map(c => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: c.hex,
                      border: selectedColor === c.name ? '3px solid var(--primary)' : '2px solid #FFFFFF',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Select Size
                </label>
                <span style={{ fontSize: '0.8rem', color: 'var(--primary)', cursor: 'pointer', fontWeight: 600 }}>Size Guide</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      padding: '0.6rem 1.1rem',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      border: selectedSize === size ? '2px solid var(--primary)' : '1.5px solid var(--border-color)',
                      backgroundColor: selectedSize === size ? 'var(--primary-light)' : 'var(--bg-surface)',
                      color: selectedSize === size ? 'var(--primary)' : 'var(--text-main)'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            {/* Quantity Stepper */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                border: '1.5px solid var(--border-color)', 
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden'
              }}
            >
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ padding: '0.75rem', color: 'var(--text-muted)' }}
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span style={{ padding: '0 1rem', fontWeight: 800, fontSize: '1rem', minWidth: '40px', textAlign: 'center' }}>
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{ padding: '0.75rem', color: 'var(--text-muted)' }}
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product, selectedSize, selectedColor, quantity)}
              disabled={!product.inStock}
              className="btn btn-primary btn-lg"
              style={{ flex: '1 1 180px' }}
            >
              <ShoppingBag size={20} />
              <span>Add to Cart</span>
            </button>

            {/* Buy Now */}
            <button
              onClick={handleBuyNow}
              disabled={!product.inStock}
              className="btn btn-accent btn-lg"
              style={{ flex: '1 1 140px' }}
            >
              <span>Buy Now</span>
            </button>

            {/* Wishlist Toggle */}
            <button
              onClick={() => toggleWishlist(product.id)}
              className="btn btn-secondary btn-icon"
              style={{ padding: '0.9rem', borderRadius: 'var(--radius-md)' }}
              aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart size={22} fill={inWishlist ? "var(--sale-red)" : "none"} color={inWishlist ? "var(--sale-red)" : "var(--text-muted)"} />
            </button>
          </div>

          {/* Guarantee Micro-Trust Icons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)', fontSize: '0.8rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <div>
              <Truck size={20} style={{ margin: '0 auto 0.25rem', color: 'var(--primary)' }} />
              <div>Free Delivery Over $75</div>
            </div>
            <div>
              <ShieldCheck size={20} style={{ margin: '0 auto 0.25rem', color: 'var(--accent)' }} />
              <div>Authentic Apex Quality</div>
            </div>
            <div>
              <RotateCcw size={20} style={{ margin: '0 auto 0.25rem', color: '#F59E0B' }} />
              <div>30-Day Easy Returns</div>
            </div>
          </div>

        </div>
      </div>

      {/* TECHNICAL TABS SECTION */}
      <section className="card" style={{ padding: '2rem', marginBottom: '4rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
          <button
            onClick={() => setActiveTab('desc')}
            style={{
              fontSize: '1rem',
              fontWeight: 800,
              color: activeTab === 'desc' ? 'var(--primary)' : 'var(--text-muted)',
              borderBottom: activeTab === 'desc' ? '2px solid var(--primary)' : 'none',
              paddingBottom: '0.5rem'
            }}
          >
            Features & Overview
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            style={{
              fontSize: '1rem',
              fontWeight: 800,
              color: activeTab === 'specs' ? 'var(--primary)' : 'var(--text-muted)',
              borderBottom: activeTab === 'specs' ? '2px solid var(--primary)' : 'none',
              paddingBottom: '0.5rem'
            }}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab('shipping')}
            style={{
              fontSize: '1rem',
              fontWeight: 800,
              color: activeTab === 'shipping' ? 'var(--primary)' : 'var(--text-muted)',
              borderBottom: activeTab === 'shipping' ? '2px solid var(--primary)' : 'none',
              paddingBottom: '0.5rem'
            }}
          >
            Shipping & Policy
          </button>
        </div>

        {activeTab === 'desc' && (
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Key Performance Features</h3>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', listStyle: 'none' }}>
              {product.features.map((feat, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', color: '#047857', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Check size={14} />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'specs' && (
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Technical Details</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <tbody>
                {Object.entries(product.specifications).map(([key, val], idx) => (
                  <tr key={key} style={{ backgroundColor: idx % 2 === 0 ? 'var(--bg-primary)' : 'transparent', borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 700, width: '35%', color: 'var(--text-muted)' }}>{key}</td>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--text-main)' }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'shipping' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            <p><strong>Express Delivery:</strong> Orders placed before 2 PM EST ship same-day. Estimated transit time: 2-4 business days.</p>
            <p><strong>30-Day Guarantee:</strong> Try your gear on. If it doesn't meet your expectations or fit properly, return it in original condition for a fast full refund.</p>
          </div>
        )}
      </section>

      {/* RELATED PRODUCTS RECOMMENDATION */}
      {relatedProducts.length > 0 && (
        <section>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Related {product.sport} Gear</h2>
            <button onClick={() => handleCategorySelect(product.sport)} className="btn btn-secondary btn-sm">
              Explore All {product.sport} →
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {relatedProducts.map(rel => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
