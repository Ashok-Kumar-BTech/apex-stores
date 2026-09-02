import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  User as UserIcon, 
  Package, 
  MapPin, 
  LogOut, 
  Lock, 
  CheckCircle2, 
  Clock, 
  Truck,
  ArrowRight
} from 'lucide-react';

export const AccountView: React.FC = () => {
  const { currentUser, orders, login, logout, setCurrentView, handleCategorySelect } = useStore();

  const [emailInput, setEmailInput] = useState('alex.turner@example.com');
  const [passwordInput, setPasswordInput] = useState('••••••••');
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'addresses'>('orders');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      login(emailInput);
    }
  };

  if (!currentUser) {
    return (
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '6rem' }}>
        
        <div className="card" style={{ maxWidth: '450px', margin: '0 auto', padding: '2.5rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <UserIcon size={32} />
            </div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 900 }}>Sign In to Apex Sports</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.35rem' }}>
              Manage your orders, track shipments, and save your favorite sports gear.
            </p>
          </div>

          {/* Notice */}
          <div style={{ backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Lock size={16} color="var(--primary)" />
            <span>Simulated Authentication Demo (Enter any email to test).</span>
          </div>

          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg btn-full" style={{ marginTop: '1rem' }}>
              <span>Sign In / Demo Login</span>
              <ArrowRight size={18} />
            </button>
          </form>

        </div>

      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
      
      {/* Account Header */}
      <div className="card" style={{ padding: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800 }}>
            {currentUser.name.charAt(0)}
          </div>
          <div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 900 }}>{currentUser.name}</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{currentUser.email} • Apex Athlete Club Member</p>
          </div>
        </div>

        <button onClick={logout} className="btn btn-secondary btn-sm">
          <LogOut size={16} />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '2rem' }}>
        <button
          onClick={() => setActiveTab('orders')}
          style={{
            fontSize: '1rem',
            fontWeight: 800,
            color: activeTab === 'orders' ? 'var(--primary)' : 'var(--text-muted)',
            borderBottom: activeTab === 'orders' ? '2.5px solid var(--primary)' : 'none',
            paddingBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Package size={18} />
          <span>Order History ({orders.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('addresses')}
          style={{
            fontSize: '1rem',
            fontWeight: 800,
            color: activeTab === 'addresses' ? 'var(--primary)' : 'var(--text-muted)',
            borderBottom: activeTab === 'addresses' ? '2.5px solid var(--primary)' : 'none',
            paddingBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <MapPin size={18} />
          <span>Saved Addresses</span>
        </button>
      </div>

      {/* Orders Tab Content */}
      {activeTab === 'orders' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {orders.length > 0 ? (
            orders.map(order => (
              <div key={order.orderId} className="card" style={{ padding: '1.5rem' }}>
                
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Order ID</span>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--primary)' }}>#{order.orderId}</h3>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Placed On</span>
                    <div style={{ fontWeight: 600 }}>{order.date}</div>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Total</span>
                    <div style={{ fontWeight: 900, color: 'var(--text-main)' }}>${order.total.toFixed(2)}</div>
                  </div>

                  <span className="badge badge-accent" style={{ padding: '0.4rem 0.8rem' }}>
                    <Truck size={14} />
                    <span>{order.status}</span>
                  </span>
                </div>

                {/* Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {order.items.map(item => (
                    <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem' }}>
                      <img src={item.product.image} alt={item.product.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '6px' }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700 }}>{item.product.name}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{item.selectedSize ? `Size: ${item.selectedSize}` : ''} • Qty: {item.quantity}</div>
                      </div>
                      <div style={{ fontWeight: 800 }}>${(item.product.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}
                </div>

              </div>
            ))
          ) : (
            <div className="card" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              <Package size={40} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
              <h3>No previous orders yet</h3>
              <p style={{ marginTop: '0.5rem' }}>Your order history will be saved here once you complete a purchase.</p>
              <button onClick={() => handleCategorySelect('All')} className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>
                Shop Gear Now
              </button>
            </div>
          )}
        </div>
      )}

      {/* Addresses Tab Content */}
      {activeTab === 'addresses' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {currentUser.addresses.map(addr => (
            <div key={addr.id} className="card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontWeight: 800, fontSize: '1rem' }}>{addr.name}</span>
                {addr.isDefault && <span className="badge badge-primary">Default</span>}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                <div>{currentUser.name}</div>
                <div>{addr.street}</div>
                <div>{addr.city}, {addr.state} {addr.postalCode}</div>
                <div>{addr.country}</div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
