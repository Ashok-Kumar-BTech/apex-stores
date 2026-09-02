import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { SPORTS_CATEGORIES } from '../data/products';
import { Zap, Mail, ArrowRight, ShieldCheck, Truck, RotateCcw, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const { handleCategorySelect, addToast } = useStore();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setSubscribed(true);
      addToast('Thank you for subscribing! Check your email for a 15% discount code.', 'success');
      setNewsletterEmail('');
    } else {
      addToast('Please enter a valid email address.', 'error');
    }
  };

  return (
    <footer style={{ backgroundColor: 'var(--dark-surface)', color: 'var(--dark-text)', marginTop: 'auto', borderTop: '1px solid var(--dark-border)' }}>
      {/* Benefits Trust Bar */}
      <div style={{ backgroundColor: 'var(--dark-surface-2)', borderBottom: '1px solid var(--dark-border)', padding: '2.5rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.85rem', borderRadius: '12px', backgroundColor: 'rgba(0,102,255,0.15)', color: 'var(--primary)' }}>
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700 }}>Quality-Tested Gear</h4>
              <p style={{ color: 'var(--dark-text-muted)', fontSize: '0.85rem' }}>Tested by athletes for performance & durability</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.85rem', borderRadius: '12px', backgroundColor: 'rgba(0,240,255,0.15)', color: 'var(--secondary)' }}>
              <Truck size={28} />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700 }}>Express Delivery</h4>
              <p style={{ color: 'var(--dark-text-muted)', fontSize: '0.85rem' }}>Free shipping on all orders over $75</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.85rem', borderRadius: '12px', backgroundColor: 'rgba(16,185,129,0.15)', color: 'var(--accent)' }}>
              <RotateCcw size={28} />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700 }}>30-Day Easy Returns</h4>
              <p style={{ color: 'var(--dark-text-muted)', fontSize: '0.85rem' }}>Hassle-free 100% money back guarantee</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.85rem', borderRadius: '12px', backgroundColor: 'rgba(245,158,11,0.15)', color: '#F59E0B' }}>
              <Award size={28} />
            </div>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700 }}>Best Value Pricing</h4>
              <p style={{ color: 'var(--dark-text-muted)', fontSize: '0.85rem' }}>Direct manufacturer pricing guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container" style={{ padding: '4rem 1.5rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>
          
          {/* Brand Info Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 900, color: '#FFFFFF' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #0066FF 0%, #00F0FF 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={22} color="#FFFFFF" fill="#FFFFFF" />
              </div>
              <span>APEX<span style={{ color: 'var(--primary)' }}>SPORTS</span></span>
            </div>
            <p style={{ color: 'var(--dark-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Gear Up. Get Moving. High-performance sports equipment, athletic footwear, and apparel engineered for athletes of all levels.
            </p>
            
            {/* Newsletter Form */}
            <div style={{ marginTop: '0.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Join the Apex Athletes Club
              </div>
              {subscribed ? (
                <div style={{ backgroundColor: 'rgba(16,185,129,0.2)', color: '#34D399', padding: '0.75rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600 }}>
                  ✓ You're subscribed! Use code APEX15 at checkout.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    style={{
                      padding: '0.65rem 0.9rem',
                      borderRadius: '8px',
                      border: '1px solid var(--dark-border)',
                      backgroundColor: 'var(--dark-surface-2)',
                      color: '#FFFFFF',
                      fontSize: '0.85rem',
                      flex: 1
                    }}
                  />
                  <button type="submit" className="btn btn-primary btn-sm" aria-label="Subscribe to newsletter">
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Sports & Activities</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--dark-text-muted)' }}>
              {SPORTS_CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handleCategorySelect(cat.id); }}
                    style={{ transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--dark-text-muted)'}
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support Column */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Customer Support</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--dark-text-muted)' }}>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Order Tracking</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Shipping & Delivery</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>30-Day Return Policy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Size Guide & Fitting</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Warranty & Repairs</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Store Locations</a></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem' }}>Apex Sports</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--dark-text-muted)' }}>
              <li><a href="#" onClick={(e) => e.preventDefault()}>About Us</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Careers</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Sustainability</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a></li>
            </ul>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
              <span className="badge badge-outline" style={{ borderColor: 'var(--dark-border)', color: 'var(--dark-text-muted)' }}>Visa / Mastercard</span>
              <span className="badge badge-outline" style={{ borderColor: 'var(--dark-border)', color: 'var(--dark-text-muted)' }}>UPI</span>
              <span className="badge badge-outline" style={{ borderColor: 'var(--dark-border)', color: 'var(--dark-text-muted)' }}>COD</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom Copyright */}
        <div style={{ marginTop: '3.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--dark-border)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', fontSize: '0.85rem', color: 'var(--dark-text-muted)' }}>
          <div>
            © {new Date().getFullYear()} Apex Sports Ltd. All rights reserved. Original Sports Retail Platform.
          </div>
          <div style={{ fontSize: '0.8rem' }}>
            Simulated e-commerce demo website for testing & development.
          </div>
        </div>
      </div>
    </footer>
  );
};
