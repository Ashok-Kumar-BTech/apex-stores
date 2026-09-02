import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { SPORTS_CATEGORIES } from '../data/products';
import { 
  ShoppingBag, 
  Heart, 
  User as UserIcon, 
  Search, 
  Menu, 
  X, 
  Zap,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    currentView, 
    setCurrentView, 
    cartCount, 
    wishlistIds, 
    currentUser, 
    searchQuery, 
    setSearchQuery,
    handleCategorySelect,
    products,
    viewProductDetails
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentView('catalogue');
      setSearchFocused(false);
    }
  };

  // Instant Suggestions (Top 5 matches)
  const suggestions = searchQuery.trim()
    ? products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.sport.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 900, backgroundColor: 'var(--bg-surface)' }}>
      {/* Top Banner */}
      <div 
        style={{
          backgroundColor: 'var(--dark-surface)',
          color: 'var(--dark-text-muted)',
          fontSize: '0.8rem',
          fontWeight: 600,
          padding: '0.45rem 1rem',
          textAlign: 'center',
          borderBottom: '1px solid var(--dark-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}
      >
        <Zap size={14} color="#00F0FF" className="animate-pulse" />
        <span>⚡ Free Express Shipping on orders over $75 | 30-Day Easy Returns</span>
      </div>

      {/* Main Header Container */}
      <div 
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          gap: '1.5rem',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="btn-icon"
          aria-label="Toggle navigation menu"
          style={{ display: 'flex' }}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setCurrentView('home'); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem',
            fontWeight: 900,
            color: 'var(--text-main)',
            letterSpacing: '-0.02em'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0066FF 0%, #00F0FF 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(0,102,255,0.3)'
            }}
          >
            <Zap size={22} color="#FFFFFF" fill="#FFFFFF" />
          </div>
          <span>APEX<span style={{ color: 'var(--primary)' }}>SPORTS</span></span>
        </a>

        {/* Desktop Nav Links */}
        <nav 
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
            fontWeight: 600,
            fontSize: '0.95rem'
          }}
          aria-label="Main Navigation"
          className="desktop-nav"
        >
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setCurrentView('home'); }}
            style={{
              color: currentView === 'home' ? 'var(--primary)' : 'var(--text-main)',
              transition: 'color var(--transition-fast)'
            }}
          >
            Home
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleCategorySelect('All'); }}
            style={{
              color: currentView === 'catalogue' ? 'var(--primary)' : 'var(--text-main)',
              transition: 'color var(--transition-fast)'
            }}
          >
            All Gear
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleCategorySelect('Running'); }}
            style={{ color: 'var(--text-main)' }}
          >
            Running
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleCategorySelect('Football'); }}
            style={{ color: 'var(--text-main)' }}
          >
            Football
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); handleCategorySelect('Fitness'); }}
            style={{ color: 'var(--text-main)' }}
          >
            Fitness
          </a>
        </nav>

        {/* Search Bar */}
        <div 
          ref={searchRef}
          style={{
            position: 'relative',
            flex: '1 1 320px',
            maxWidth: '450px'
          }}
        >
          <form onSubmit={handleSearchSubmit} style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Search shoes, equipment, sports..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSearchFocused(true);
              }}
              onFocus={() => setSearchFocused(true)}
              aria-label="Search products"
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.6rem',
                borderRadius: 'var(--radius-full)',
                border: '1.5px solid var(--border-color)',
                backgroundColor: 'var(--bg-primary)',
                fontSize: '0.9rem',
                color: 'var(--text-main)',
                transition: 'all var(--transition-fast)'
              }}
            />
            <Search 
              size={18} 
              style={{
                position: 'absolute',
                left: '0.9rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }} 
            />
          </form>

          {/* Instant Search Suggestions Popup */}
          {searchFocused && searchQuery.trim().length > 0 && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 0.5rem)',
                left: 0,
                right: 0,
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-xl)',
                overflow: 'hidden',
                zIndex: 1000
              }}
            >
              {suggestions.length > 0 ? (
                <div>
                  <div 
                    style={{ 
                      padding: '0.5rem 1rem', 
                      fontSize: '0.75rem', 
                      fontWeight: 700, 
                      color: 'var(--text-muted)', 
                      textTransform: 'uppercase',
                      backgroundColor: 'var(--bg-primary)',
                      borderBottom: '1px solid var(--border-color)'
                    }}
                  >
                    Product Suggestions ({suggestions.length})
                  </div>
                  {suggestions.map(p => (
                    <div
                      key={p.id}
                      onClick={() => {
                        viewProductDetails(p.id);
                        setSearchFocused(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem',
                        padding: '0.65rem 1rem',
                        cursor: 'pointer',
                        borderBottom: '1px solid var(--border-color)',
                        transition: 'background var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-primary)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '6px' }} 
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {p.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {p.sport} • <span style={{ color: 'var(--primary)', fontWeight: 700 }}>${p.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div
                    onClick={() => {
                      setCurrentView('catalogue');
                      setSearchFocused(false);
                    }}
                    style={{
                      padding: '0.75rem 1rem',
                      textAlign: 'center',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      cursor: 'pointer',
                      backgroundColor: 'var(--primary-light)'
                    }}
                  >
                    View All Results ({products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).length}) →
                  </div>
                </div>
              ) : (
                <div style={{ padding: '1.25rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  No sports products found for "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Wishlist Icon */}
          <button
            onClick={() => setCurrentView('wishlist')}
            className="btn-icon"
            aria-label={`Wishlist with ${wishlistIds.length} items`}
            style={{ position: 'relative' }}
          >
            <Heart size={22} />
            {wishlistIds.length > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  backgroundColor: 'var(--sale-red)',
                  color: '#FFFFFF',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {wishlistIds.length}
              </span>
            )}
          </button>

          {/* Cart Icon */}
          <button
            onClick={() => setCurrentView('cart')}
            className="btn-icon"
            aria-label={`Shopping cart with ${cartCount} items`}
            style={{ position: 'relative' }}
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  backgroundColor: 'var(--primary)',
                  color: '#FFFFFF',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Account / User Icon */}
          <button
            onClick={() => setCurrentView(currentUser ? 'account' : 'login')}
            className="btn-secondary btn-sm"
            style={{ borderRadius: 'var(--radius-full)', padding: '0.4rem 0.85rem' }}
          >
            <UserIcon size={18} />
            <span className="desktop-only" style={{ marginLeft: '0.35rem', fontWeight: 600 }}>
              {currentUser ? currentUser.name.split(' ')[0] : 'Sign In'}
            </span>
          </button>
        </div>
      </div>

      {/* Sub-Header Category Bar */}
      <div 
        style={{ 
          backgroundColor: 'var(--bg-surface)', 
          borderBottom: '1px solid var(--border-color)',
          overflowX: 'auto',
          whiteSpace: 'nowrap'
        }}
      >
        <div 
          className="container" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1.25rem', 
            paddingTop: '0.5rem', 
            paddingBottom: '0.5rem' 
          }}
        >
          <button
            onClick={() => handleCategorySelect('All')}
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: currentView === 'catalogue' ? 'var(--primary)' : 'var(--text-muted)',
              padding: '0.25rem 0.6rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: currentView === 'catalogue' ? 'var(--primary-light)' : 'transparent'
            }}
          >
            All Sports
          </button>
          {SPORTS_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-main)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'color var(--transition-fast)'
              }}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.7)',
            zIndex: 1000,
            display: 'flex'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              width: '80%',
              maxWidth: '320px',
              backgroundColor: 'var(--bg-surface)',
              height: '100%',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-xl)',
              animation: 'slideInLeft 0.3s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.25rem' }}>
                APEX<span style={{ color: 'var(--primary)' }}>SPORTS</span>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="btn-icon">
                <X size={24} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1.05rem', fontWeight: 600 }}>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('home'); setMobileMenuOpen(false); }}>Home</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleCategorySelect('All'); setMobileMenuOpen(false); }}>All Sports Products</a>
              <hr style={{ borderColor: 'var(--border-color)', margin: '0.5rem 0' }} />
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Browse By Sport</div>
              {SPORTS_CATEGORIES.map(cat => (
                <a 
                  key={cat.id} 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); handleCategorySelect(cat.id); setMobileMenuOpen(false); }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <span>{cat.name}</span>
                  <ChevronRight size={18} color="var(--text-muted)" />
                </a>
              ))}
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
              <button 
                className="btn btn-primary btn-full"
                onClick={() => { setCurrentView(currentUser ? 'account' : 'login'); setMobileMenuOpen(false); }}
              >
                <UserIcon size={18} />
                <span>{currentUser ? 'My Account' : 'Sign In / Register'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS helper for responsive desktop nav */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
        }
        @media (max-width: 640px) {
          .desktop-only { display: none !important; }
        }
      `}</style>
    </header>
  );
};
