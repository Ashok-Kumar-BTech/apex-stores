import React from 'react';
import { useStore } from '../context/StoreContext';
import { CheckCircle2, Truck, PackageCheck, ArrowRight, Home } from 'lucide-react';

export const OrderConfirmationView: React.FC = () => {
  const { recentOrder, setCurrentView, handleCategorySelect } = useStore();

  if (!recentOrder) {
    return (
      <div className="container" style={{ paddingTop: '4rem', textAlign: 'center' }}>
        <h2>No recent order found</h2>
        <button onClick={() => setCurrentView('home')} className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '6rem' }}>
      
      <div 
        className="card" 
        style={{ 
          maxWidth: '720px', 
          margin: '0 auto', 
          padding: '3rem 2rem',
          textAlign: 'center'
        }}
      >
        {/* Animated Checkmark Icon */}
        <div 
          style={{ 
            width: '88px', 
            height: '88px', 
            borderRadius: '50%', 
            backgroundColor: 'var(--accent-light)', 
            color: '#047857', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            boxShadow: '0 0 25px rgba(16,185,129,0.3)'
          }}
        >
          <CheckCircle2 size={52} />
        </div>

        <span className="badge badge-accent" style={{ marginBottom: '0.75rem' }}>CONFIRMED & PROCESSING</span>

        <h1 style={{ fontSize: '2.25rem', fontWeight: 900, marginBottom: '0.5rem' }}>
          Order Placed Successfully!
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem' }}>
          Thank you for choosing Apex Sports. Your order <strong style={{ color: 'var(--primary)' }}>#{recentOrder.orderId}</strong> has been received and is being prepared for express shipping.
        </p>

        {/* Order Details Card */}
        <div 
          style={{ 
            backgroundColor: 'var(--bg-primary)', 
            borderRadius: 'var(--radius-md)', 
            padding: '1.5rem', 
            textAlign: 'left',
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            fontSize: '0.9rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            <div>
              <div style={{ color: 'var(--text-muted)' }}>Estimated Delivery</div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-main)' }}>{recentOrder.estimatedDelivery}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: 'var(--text-muted)' }}>Payment Method</div>
              <div style={{ fontWeight: 800, textTransform: 'uppercase' }}>{recentOrder.paymentMethod}</div>
            </div>
          </div>

          <div>
            <div style={{ color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Shipping Address</div>
            <div style={{ fontWeight: 700 }}>{recentOrder.customer.fullName}</div>
            <div>{recentOrder.shippingAddress.street}, {recentOrder.shippingAddress.city}, {recentOrder.shippingAddress.state} {recentOrder.shippingAddress.postalCode}</div>
          </div>

          <div>
            <div style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Items Ordered ({recentOrder.items.length})</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {recentOrder.items.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--bg-surface)', padding: '0.5rem 0.75rem', borderRadius: '6px' }}>
                  <span>{item.product.name} (x{item.quantity})</span>
                  <span style={{ fontWeight: 700 }}>${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 900, borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
            <span>Total Amount Paid</span>
            <span style={{ color: 'var(--primary)' }}>${recentOrder.total.toFixed(2)}</span>
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setCurrentView('account')} 
            className="btn btn-secondary btn-lg"
          >
            <span>View Order History</span>
          </button>

          <button 
            onClick={() => handleCategorySelect('All')} 
            className="btn btn-primary btn-lg"
          >
            <Home size={18} />
            <span>Continue Shopping</span>
          </button>
        </div>

      </div>

    </div>
  );
};
