import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Tag,
  ArrowLeft
} from 'lucide-react';

export const CartView: React.FC = () => {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    cartSubtotal, 
    cartDiscount, 
    cartShipping, 
    cartTotal,
    setCurrentView,
    handleCategorySelect,
    addToast
  } = useStore();

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'APEX15') {
      setAppliedPromo('APEX15');
      addToast('Promo code APEX15 applied! 15% discount registered.', 'success');
    } else if (promoCode.trim().toUpperCase() === 'SUMMER30') {
      setAppliedPromo('SUMMER30');
      addToast('Promo code SUMMER30 applied!', 'success');
    } else {
      addToast('Invalid promo code. Try APEX15 for 15% off!', 'error');
    }
  };

  const finalTotal = appliedPromo === 'APEX15'
    ? cartTotal * 0.85
    : cartTotal;

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '6rem', textAlign: 'center' }}>
        <div 
          className="card" 
          style={{ 
            maxWidth: '520px', 
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
              backgroundColor: 'var(--primary-light)', 
              color: 'var(--primary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
          >
            <ShoppingBag size={40} />
          </div>
          <h1 style={{ fontSize: '1.85rem', fontWeight: 900 }}>Your Cart is Empty</h1>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Looks like you haven't added any sports gear to your bag yet. Explore our latest performance products and equip your next adventure.
          </p>
          <button 
            onClick={() => handleCategorySelect('All')} 
            className="btn btn-primary btn-lg" 
            style={{ marginTop: '0.5rem' }}
          >
            <span>Explore Sports Gear</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 900 }}>Your Shopping Cart</h1>
        <button 
          onClick={() => handleCategorySelect('All')} 
          style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
        >
          <ArrowLeft size={16} />
          <span>Continue Shopping</span>
        </button>
      </div>

      {/* Main Cart Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '2.5rem' }} className="cart-layout">
        
        {/* Left Column: Items List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cartItems.map(item => (
            <div 
              key={item.id} 
              className="card" 
              style={{ 
                padding: '1.25rem', 
                display: 'flex', 
                gap: '1.25rem', 
                alignItems: 'center',
                flexWrap: 'wrap'
              }}
            >
              {/* Product Thumbnail */}
              <img 
                src={item.product.image} 
                alt={item.product.name} 
                style={{ width: '90px', height: '90px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }} 
              />

              {/* Product Details */}
              <div style={{ flex: '1 1 200px', minWidth: 0 }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>
                  {item.product.sport}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0.2rem 0 0.4rem', color: 'var(--text-main)' }}>
                  {item.product.name}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {item.selectedSize && <span>Size: <strong>{item.selectedSize}</strong></span>}
                  {item.selectedColor && <span>Color: <strong>{item.selectedColor}</strong></span>}
                </div>
              </div>

              {/* Quantity Controls */}
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
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  style={{ padding: '0.5rem 0.75rem', color: 'var(--text-muted)' }}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span style={{ padding: '0 0.65rem', fontWeight: 800, fontSize: '0.9rem' }}>
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  style={{ padding: '0.5rem 0.75rem', color: 'var(--text-muted)' }}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Item Subtotal & Remove */}
              <div style={{ textAlign: 'right', minWidth: '100px' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--text-main)' }}>
                  ${(item.product.price * item.quantity).toFixed(2)}
                </div>
                {item.quantity > 1 && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    (${item.product.price.toFixed(2)} each)
                  </div>
                )}
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="btn-icon"
                style={{ color: 'var(--sale-red)' }}
                aria-label={`Remove ${item.product.name} from cart`}
              >
                <Trash2 size={18} />
              </button>

            </div>
          ))}

          {/* Delivery Note */}
          <div style={{ backgroundColor: 'var(--primary-light)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 600 }}>
            <Truck size={20} />
            <span>
              {cartShipping === 0 
                ? '🎉 Congratulations! Your order qualifies for FREE Express Shipping!' 
                : `Add $${(75 - cartSubtotal).toFixed(2)} more of gear to get FREE Express Shipping!`}
            </span>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div>
          <div className="card" style={{ padding: '1.75rem', position: 'sticky', top: '100px' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
              Order Summary
            </h2>

            {/* Calculations Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
                <span style={{ fontWeight: 700 }}>${cartSubtotal.toFixed(2)}</span>
              </div>

              {cartDiscount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent)' }}>
                  <span>Product Savings</span>
                  <span style={{ fontWeight: 700 }}>-${cartDiscount.toFixed(2)}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Estimated Delivery</span>
                <span style={{ fontWeight: 700 }}>
                  {cartShipping === 0 ? <strong style={{ color: 'var(--accent)' }}>FREE</strong> : `$${cartShipping.toFixed(2)}`}
                </span>
              </div>

              {appliedPromo && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--primary)' }}>
                  <span>Promo Code ({appliedPromo})</span>
                  <span style={{ fontWeight: 700 }}>-15% OFF</span>
                </div>
              )}

              <hr style={{ borderColor: 'var(--border-color)', margin: '0.5rem 0' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.35rem', fontWeight: 900 }}>
                <span>Total</span>
                <span style={{ color: 'var(--primary)' }}>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Promo Code Entry */}
            <form onSubmit={handleApplyPromo} style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                placeholder="Promo Code (e.g. APEX15)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                style={{
                  flex: 1,
                  padding: '0.6rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px solid var(--border-color)',
                  fontSize: '0.85rem'
                }}
              />
              <button type="submit" className="btn btn-secondary btn-sm">
                Apply
              </button>
            </form>

            {/* Checkout Button */}
            <button
              onClick={() => setCurrentView('checkout')}
              className="btn btn-primary btn-lg btn-full"
              style={{ marginTop: '1.5rem' }}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <ShieldCheck size={16} color="var(--accent)" />
              <span>Encrypted & Safe Checkout</span>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .cart-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};
