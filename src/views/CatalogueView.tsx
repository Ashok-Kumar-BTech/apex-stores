import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ProductCard } from '../components/ProductCard';
import { SPORTS_CATEGORIES, BRANDS } from '../data/products';
import { 
  Filter, 
  RotateCcw, 
  X, 
  SlidersHorizontal, 
  Star, 
  Check,
  SearchX
} from 'lucide-react';

export const CatalogueView: React.FC = () => {
  const { 
    filteredProducts, 
    filters, 
    setFilters, 
    resetFilters, 
    searchQuery,
    setSearchQuery
  } = useStore();

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const productTypesList = ['Footwear', 'Apparel', 'Equipment', 'Accessories', 'Protective Gear'];
  const sizesList = ['XS', 'S', 'M', 'L', 'XL', 'US 8', 'US 9', 'US 10', 'US 11'];

  // Toggle brand in filter
  const toggleBrand = (brandName: string) => {
    setFilters(prev => {
      const exists = prev.brands.includes(brandName);
      const newBrands = exists
        ? prev.brands.filter(b => b !== brandName)
        : [...prev.brands, brandName];
      return { ...prev, brands: newBrands };
    });
  };

  // Toggle product type
  const toggleProductType = (type: string) => {
    setFilters(prev => {
      const exists = prev.productTypes.includes(type);
      const newTypes = exists
        ? prev.productTypes.filter(t => t !== type)
        : [...prev.productTypes, type];
      return { ...prev, productTypes: newTypes };
    });
  };

  // Toggle size
  const toggleSize = (size: string) => {
    setFilters(prev => {
      const exists = prev.sizes.includes(size);
      const newSizes = exists
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size];
      return { ...prev, sizes: newSizes };
    });
  };

  // Toggle gender
  const toggleGender = (gender: string) => {
    setFilters(prev => {
      const exists = prev.genders.includes(gender);
      const newGenders = exists
        ? prev.genders.filter(g => g !== gender)
        : [...prev.genders, gender];
      return { ...prev, genders: newGenders };
    });
  };

  const FilterSidebarContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* Header & Reset */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <SlidersHorizontal size={18} color="var(--primary)" />
          <span>Filters</span>
        </h3>
        <button
          onClick={resetFilters}
          style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
        >
          <RotateCcw size={14} />
          <span>Reset All</span>
        </button>
      </div>

      {/* Sport Category Filter */}
      <div>
        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          Sport / Discipline
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
            <input
              type="radio"
              name="sportCategory"
              checked={filters.sport === 'All'}
              onChange={() => setFilters(prev => ({ ...prev, sport: 'All' }))}
            />
            <span style={{ fontWeight: filters.sport === 'All' ? 700 : 400 }}>All Sports</span>
          </label>
          {SPORTS_CATEGORIES.map(cat => (
            <label key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
              <input
                type="radio"
                name="sportCategory"
                checked={filters.sport === cat.id}
                onChange={() => setFilters(prev => ({ ...prev, sport: cat.id }))}
              />
              <span style={{ fontWeight: filters.sport === cat.id ? 700 : 400 }}>{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Product Type Filter */}
      <div>
        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          Product Type
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {productTypesList.map(type => (
            <label key={type} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={filters.productTypes.includes(type)}
                onChange={() => toggleProductType(type)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Max Price
          </h4>
          <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: '0.95rem' }}>
            ${filters.priceRange[1]}
          </span>
        </div>
        <input
          type="range"
          min="10"
          max="350"
          step="10"
          value={filters.priceRange[1]}
          onChange={(e) => setFilters(prev => ({ ...prev, priceRange: [0, Number(e.target.value)] }))}
          style={{ width: '100%', accentColor: 'var(--primary)' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '0.2rem' }}>
          <span>$0</span>
          <span>$350</span>
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          Brand
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '180px', overflowY: 'auto' }}>
          {BRANDS.map(brand => (
            <label key={brand} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => toggleBrand(brand)}
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Size Pills */}
      <div>
        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          Size
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {sizesList.map(size => {
            const active = filters.sizes.includes(size);
            return (
              <button
                key={size}
                onClick={() => toggleSize(size)}
                style={{
                  padding: '0.3rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  border: active ? '1.5px solid var(--primary)' : '1px solid var(--border-color)',
                  backgroundColor: active ? 'var(--primary-light)' : 'var(--bg-surface)',
                  color: active ? 'var(--primary)' : 'var(--text-main)'
                }}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Gender Filter */}
      <div>
        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          Gender
        </h4>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['Men', 'Women', 'Unisex'].map(g => {
            const active = filters.genders.includes(g);
            return (
              <button
                key={g}
                onClick={() => toggleGender(g)}
                style={{
                  flex: 1,
                  padding: '0.4rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  border: active ? '1.5px solid var(--primary)' : '1px solid var(--border-color)',
                  backgroundColor: active ? 'var(--primary-light)' : 'var(--bg-surface)',
                  color: active ? 'var(--primary)' : 'var(--text-main)'
                }}
              >
                {g}
              </button>
            );
          })}
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          Minimum Rating
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {[4.5, 4.0, 3.5].map(rating => (
            <label key={rating} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', cursor: 'pointer' }}>
              <input
                type="radio"
                name="minRating"
                checked={filters.minRating === rating}
                onChange={() => setFilters(prev => ({ ...prev, minRating: prev.minRating === rating ? 0 : rating }))}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Star size={14} fill="#F59E0B" color="#F59E0B" />
                <span>{rating} & Up</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Stock Availability */}
      <div>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => setFilters(prev => ({ ...prev, inStockOnly: e.target.checked }))}
          />
          <span>In Stock Only</span>
        </label>
      </div>

    </div>
  );

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      
      {/* Page Title & Sort Bar */}
      <div 
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '1rem',
          marginBottom: '1.5rem',
          paddingBottom: '1.25rem',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 900 }}>
            {filters.sport === 'All' ? 'All Sports Gear' : `${filters.sport} Products`}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Showing {filteredProducts.length} results {searchQuery && `for "${searchQuery}"`}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="btn btn-secondary btn-sm mobile-filter-btn"
          >
            <Filter size={16} />
            <span>Filters</span>
          </button>

          {/* Sort Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Sort:</span>
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
              style={{
                padding: '0.5rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                border: '1.5px solid var(--border-color)',
                backgroundColor: 'var(--bg-surface)',
                fontWeight: 600,
                fontSize: '0.875rem',
                color: 'var(--text-main)',
                cursor: 'pointer'
              }}
            >
              <option value="relevance">Featured & Relevant</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
              <option value="newest">Newest Arrivals</option>
              <option value="popularity">Popularity</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Layout Grid (Sidebar + Product Grid) */}
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2.5rem' }} className="catalogue-layout">
        
        {/* Desktop Sidebar */}
        <aside className="desktop-sidebar card" style={{ padding: '1.5rem', height: 'fit-content' }}>
          <FilterSidebarContent />
        </aside>

        {/* Product Grid / Empty State */}
        <main>
          {filteredProducts.length > 0 ? (
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
                gap: '1.5rem' 
              }}
            >
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div 
              className="card"
              style={{ 
                padding: '4rem 2rem', 
                textAlign: 'center', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '1rem',
                backgroundColor: 'var(--bg-surface)'
              }}
            >
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SearchX size={36} />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>No products found</h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '420px', lineHeight: 1.5 }}>
                We couldn't find any sports items matching your current filters or search phrase "{searchQuery}".
              </p>
              <button onClick={resetFilters} className="btn btn-primary btn-md">
                <RotateCcw size={18} />
                <span>Clear All Filters</span>
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filter Drawer Modal */}
      {mobileFilterOpen && (
        <div 
          className="modal-overlay" 
          onClick={() => setMobileFilterOpen(false)}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '400px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Filter Sports Gear</h2>
              <button onClick={() => setMobileFilterOpen(false)} className="btn-icon">
                <X size={20} />
              </button>
            </div>
            
            <FilterSidebarContent />

            <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
              <button 
                onClick={() => setMobileFilterOpen(false)} 
                className="btn btn-primary btn-full"
              >
                Apply Filters ({filteredProducts.length} Items)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS helper for catalogue layout responsiveness */}
      <style>{`
        @media (max-width: 900px) {
          .catalogue-layout { grid-template-columns: 1fr !important; }
          .desktop-sidebar { display: none !important; }
          .mobile-filter-btn { display: inline-flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-filter-btn { display: none !important; }
        }
      `}</style>
    </div>
  );
};
