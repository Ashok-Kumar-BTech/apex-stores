import React from 'react';
import { useStore } from '../context/StoreContext';
import { SPORTS_CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Award,
  Sparkles,
  Flame,
  Activity,
  Trophy,
  Target,
  Bike,
  Dumbbell,
  Compass,
  Waves,
  HeartHandshake
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { products, handleCategorySelect, setCurrentView } = useStore();

  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 8);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity size={24} />;
      case 'Trophy': return <Trophy size={24} />;
      case 'Target': return <Target size={24} />;
      case 'Bike': return <Bike size={24} />;
      case 'Dumbbell': return <Dumbbell size={24} />;
      case 'Compass': return <Compass size={24} />;
      case 'Waves': return <Waves size={24} />;
      case 'HeartHandshake': return <HeartHandshake size={24} />;
      default: return <Zap size={24} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '4rem' }}>
      
      {/* HERO SECTION */}
      <section 
        style={{
          position: 'relative',
          minHeight: '520px',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          marginTop: '1rem',
          backgroundImage: 'linear-gradient(90deg, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.6) 60%, rgba(15, 23, 42, 0.2) 100%), url(https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="container"
      >
        <div style={{ maxWidth: '650px', padding: '3rem 2rem', color: '#FFFFFF', zIndex: 10 }}>
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              backgroundColor: 'rgba(0, 102, 255, 0.25)', 
              border: '1px solid rgba(0, 240, 255, 0.4)', 
              color: '#00F0FF', 
              padding: '0.4rem 0.9rem', 
              borderRadius: 'var(--radius-full)', 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              marginBottom: '1.25rem',
              backdropFilter: 'blur(8px)'
            }}
          >
            <Sparkles size={16} />
            <span>NEW SEASON 2026 RELEASE</span>
          </div>

          <h1 
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 900, 
              lineHeight: 1.1, 
              letterSpacing: '-0.02em', 
              marginBottom: '1rem',
              color: '#FFFFFF'
            }}
          >
            GEAR UP.<br />
            <span style={{ color: 'var(--secondary)' }}>GET MOVING.</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#CBD5E1', marginBottom: '2rem', lineHeight: 1.6 }}>
            High-performance equipment, specialized gear, and performance apparel designed for every athlete's journey.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <button 
              onClick={() => handleCategorySelect('All')} 
              className="btn btn-primary btn-lg"
            >
              <span>Shop All Products</span>
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('sports-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="btn btn-dark btn-lg"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
            >
              <span>Explore Sports</span>
            </button>
          </div>
        </div>
      </section>

      {/* SPORTS CATEGORIES GRID */}
      <section id="sports-grid" className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          <div className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>Categories</div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800 }}>Explore By Sport</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Select your discipline to discover specialized high-grade equipment.</p>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '1.5rem' 
          }}
        >
          {SPORTS_CATEGORIES.map(category => (
            <div
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className="card"
              style={{
                position: 'relative',
                height: '240px',
                cursor: 'pointer',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem',
                color: '#FFFFFF'
              }}
            >
              {/* Background Image */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.85) 100%), url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.4s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />

              {/* Icon Overlay Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 5,
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                {getIcon(category.iconName)}
              </div>

              {/* Category Info */}
              <div style={{ position: 'relative', zIndex: 5, width: '100%' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {category.productCount} Products
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.2rem' }}>
                  {category.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', color: '#E2E8F0' }}>
                  <span>{category.tagline}</span>
                  <ArrowRight size={18} color="var(--secondary)" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROMOTIONAL SALES BANNER */}
      <section className="container">
        <div
          style={{
            borderRadius: 'var(--radius-lg)',
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
            border: '1px solid var(--dark-border)',
            padding: '3rem 2.5rem',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <div style={{ maxWidth: '550px', color: '#FFFFFF', zIndex: 5 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'var(--sale-red)', color: '#FFFFFF', padding: '0.35rem 0.8rem', borderRadius: 'var(--radius-full)', fontWeight: 800, fontSize: '0.8rem', marginBottom: '1rem' }}>
              <Flame size={16} />
              <span>LIMITED TIME SPECIAL</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.75rem' }}>
              Summer Sports Sale
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#94A3B8', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Save up to <strong style={{ color: '#FFFFFF' }}>30% OFF</strong> on selected running shoes, football kits, cricket willow bats, and fitness equipment.
            </p>
            <button 
              onClick={() => handleCategorySelect('All')} 
              className="btn btn-primary btn-lg"
            >
              <span>Shop Sale Offers</span>
              <ArrowRight size={20} />
            </button>
          </div>

          <div 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.05)', 
              border: '1px solid rgba(255, 255, 255, 0.1)', 
              borderRadius: 'var(--radius-lg)', 
              padding: '2rem', 
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
              minWidth: '240px'
            }}
          >
            <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--secondary)' }}>30%</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>MAX DISCOUNT</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--dark-text-muted)', marginTop: '0.5rem' }}>Applied at checkout automatically</div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="badge badge-accent" style={{ marginBottom: '0.5rem' }}>Handpicked</div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800 }}>Featured Products</h2>
          </div>
          <button 
            onClick={() => handleCategorySelect('All')} 
            className="btn btn-secondary"
          >
            <span>View All Products</span>
            <ArrowRight size={18} />
          </button>
        </div>

        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
            gap: '1.75rem' 
          }}
        >
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE APEX SPORTS */}
      <section className="container" style={{ paddingTop: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
          <div className="badge badge-primary" style={{ marginBottom: '0.5rem' }}>Our Promise</div>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800 }}>Why Choose Apex Sports?</h2>
          <p style={{ color: 'var(--text-muted)' }}>We are dedicated to supporting your passion with uncompromised quality gear.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <ShieldCheck size={32} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Quality-Tested</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              Every product undergoes strict impact, stress, and durability testing before reaching our catalogue.
            </p>
          </div>

          <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'var(--accent-light)', color: '#047857', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <Award size={32} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Affordable Pricing</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              We cut out middlemen to bring elite athlete-grade equipment directly to you at accessible prices.
            </p>
          </div>

          <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(0, 240, 255, 0.15)', color: 'var(--secondary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <Zap size={32} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Wide Sports Range</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              From competitive outdoor athletics to indoor yoga and gym training, we cover 8+ core sports disciplines.
            </p>
          </div>

          <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'var(--sale-light)', color: 'var(--sale-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <RotateCcw size={32} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>30-Day Easy Returns</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              Not completely satisfied with your fit? Return any unused product within 30 days for a full refund.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
