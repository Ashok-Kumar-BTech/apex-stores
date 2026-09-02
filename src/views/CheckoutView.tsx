import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { PaymentMethod } from '../types';
import { 
  ShieldCheck, 
  CreditCard, 
  Smartphone, 
  Banknote, 
  Lock, 
  ArrowLeft, 
  CheckCircle2,
  Loader2
} from 'lucide-react';

export const CheckoutView: React.FC = () => {
  const { 
    cartItems, 
    cartSubtotal, 
    cartShipping, 
    cartTotal, 
    currentUser, 
    placeOrder, 
    setCurrentView 
  } = useStore();

  // Form State
  const [fullName, setFullName] = useState(currentUser ? currentUser.name : '');
  const [email, setEmail] = useState(currentUser ? currentUser.email : '');
  const [phone, setPhone] = useState(currentUser ? currentUser.phone : '');

  const [street, setStreet] = useState(currentUser?.addresses[0]?.street || '');
  const [city, setCity] = useState(currentUser?.addresses[0]?.city || '');
  const [state, setState] = useState(currentUser?.addresses[0]?.state || '');
  const [postalCode, setPostalCode] = useState(currentUser?.addresses[0]?.postalCode || '');
  const [country, setCountry] = useState('United States');

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8892');
  const [cardExp, setCardExp] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('492');
  const [upiId, setUpiId] = useState('athlete@upi');

  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email is required';
    if (!phone.trim()) errs.phone = 'Phone number is required';
    if (!street.trim()) errs.street = 'Street address is required';
    if (!city.trim()) errs.city = 'City is required';
    if (!state.trim()) errs.state = 'State is required';
    if (!postalCode.trim()) errs.postalCode = 'Postal code is required';

    if (paymentMethod === 'card') {
      if (!cardNumber.trim()) errs.cardNumber = 'Card number is required';
      if (!cardExp.trim()) errs.cardExp = 'Expiry date is required';
      if (!cardCvc.trim()) errs.cardCvc = 'CVC is required';
    } else if (paymentMethod === 'upi') {
      if (!upiId.trim() || !upiId.includes('@')) errs.upiId = 'Valid UPI ID is required (e.g. user@upi)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);

    // Simulate 1.5 second payment authorization
    setTimeout(() => {
      placeOrder(
        { fullName, email, phone },
        { street, city, state, postalCode, country },
        paymentMethod
      );
      setIsProcessing(false);
    }, 1500);
  };

  if (cartItems.length === 0) {
    setCurrentView('cart');
    return null;
  }

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => setCurrentView('cart')} className="btn-icon">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 style={{ fontSize: '2rem', fontWeight: 900 }}>Checkout</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Simulated Secure Checkout Process</p>
        </div>
      </div>

      {/* Notice Banner */}
      <div style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)', padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Lock size={16} />
        <span>Simulated Payment Gateway: No real credit card or money will be charged.</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2.5rem' }} className="checkout-layout">
        
        {/* Left Form Column */}
        <form onSubmit={handleSubmitOrder} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Section 1: Customer Contact Info */}
          <div className="card" style={{ padding: '1.75rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>1</span>
              <span>Customer Information</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-grid">
              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  className={`form-input ${errors.fullName ? 'error' : ''}`}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Alex Turner"
                />
                {errors.fullName && <span className="form-error-msg">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@example.com"
                />
                {errors.email && <span className="form-error-msg">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 234-5678"
                />
                {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
              </div>
            </div>
          </div>

          {/* Section 2: Delivery Address */}
          <div className="card" style={{ padding: '1.75rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>2</span>
              <span>Delivery / Shipping Address</span>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-grid">
              <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label className="form-label">Street Address *</label>
                <input
                  type="text"
                  className={`form-input ${errors.street ? 'error' : ''}`}
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  placeholder="742 Evergreen Terrace"
                />
                {errors.street && <span className="form-error-msg">{errors.street}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">City *</label>
                <input
                  type="text"
                  className={`form-input ${errors.city ? 'error' : ''}`}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Springfield"
                />
                {errors.city && <span className="form-error-msg">{errors.city}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">State / Province *</label>
                <input
                  type="text"
                  className={`form-input ${errors.state ? 'error' : ''}`}
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="Oregon"
                />
                {errors.state && <span className="form-error-msg">{errors.state}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Postal Code *</label>
                <input
                  type="text"
                  className={`form-input ${errors.postalCode ? 'error' : ''}`}
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="97477"
                />
                {errors.postalCode && <span className="form-error-msg">{errors.postalCode}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Country</label>
                <select
                  className="form-input"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Payment Method */}
          <div className="card" style={{ padding: '1.75rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem' }}>3</span>
              <span>Payment Option</span>
            </h2>

            {/* Method Tabs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                style={{
                  padding: '1rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: paymentMethod === 'card' ? '2px solid var(--primary)' : '1.5px solid var(--border-color)',
                  backgroundColor: paymentMethod === 'card' ? 'var(--primary-light)' : 'var(--bg-surface)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.35rem',
                  cursor: 'pointer'
                }}
              >
                <CreditCard size={22} color={paymentMethod === 'card' ? 'var(--primary)' : 'var(--text-muted)'} />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: paymentMethod === 'card' ? 'var(--primary)' : 'var(--text-main)' }}>Card</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                style={{
                  padding: '1rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: paymentMethod === 'upi' ? '2px solid var(--primary)' : '1.5px solid var(--border-color)',
                  backgroundColor: paymentMethod === 'upi' ? 'var(--primary-light)' : 'var(--bg-surface)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.35rem',
                  cursor: 'pointer'
                }}
              >
                <Smartphone size={22} color={paymentMethod === 'upi' ? 'var(--primary)' : 'var(--text-muted)'} />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: paymentMethod === 'upi' ? 'var(--primary)' : 'var(--text-main)' }}>UPI</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('cod')}
                style={{
                  padding: '1rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  border: paymentMethod === 'cod' ? '2px solid var(--primary)' : '1.5px solid var(--border-color)',
                  backgroundColor: paymentMethod === 'cod' ? 'var(--primary-light)' : 'var(--bg-surface)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.35rem',
                  cursor: 'pointer'
                }}
              >
                <Banknote size={22} color={paymentMethod === 'cod' ? 'var(--primary)' : 'var(--text-muted)'} />
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: paymentMethod === 'cod' ? 'var(--primary)' : 'var(--text-main)' }}>Cash on Delivery</span>
              </button>
            </div>

            {/* Card Inputs */}
            {paymentMethod === 'card' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-grid">
                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                  <label className="form-label">Card Number (Simulated)</label>
                  <input
                    type="text"
                    className={`form-input ${errors.cardNumber ? 'error' : ''}`}
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                  {errors.cardNumber && <span className="form-error-msg">{errors.cardNumber}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Expiry Date</label>
                  <input
                    type="text"
                    className={`form-input ${errors.cardExp ? 'error' : ''}`}
                    value={cardExp}
                    onChange={(e) => setCardExp(e.target.value)}
                    placeholder="MM/YY"
                  />
                  {errors.cardExp && <span className="form-error-msg">{errors.cardExp}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">CVC</label>
                  <input
                    type="text"
                    className={`form-input ${errors.cardCvc ? 'error' : ''}`}
                    value={cardCvc}
                    onChange={(e) => setCardCvc(e.target.value)}
                    placeholder="123"
                  />
                  {errors.cardCvc && <span className="form-error-msg">{errors.cardCvc}</span>}
                </div>
              </div>
            )}

            {/* UPI Inputs */}
            {paymentMethod === 'upi' && (
              <div className="form-group">
                <label className="form-label">UPI ID</label>
                <input
                  type="text"
                  className={`form-input ${errors.upiId ? 'error' : ''}`}
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="username@upi"
                />
                {errors.upiId && <span className="form-error-msg">{errors.upiId}</span>}
              </div>
            )}

            {/* COD Note */}
            {paymentMethod === 'cod' && (
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', backgroundColor: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                You will pay <strong>${cartTotal.toFixed(2)}</strong> in cash to the delivery courier upon receiving your package.
              </p>
            )}

          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className="btn btn-primary btn-lg btn-full"
            style={{ padding: '1.1rem' }}
          >
            {isProcessing ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Loader2 size={22} className="animate-pulse" />
                <span>Processing Order...</span>
              </div>
            ) : (
              <span>Place Order (${cartTotal.toFixed(2)})</span>
            )}
          </button>

        </form>

        {/* Right Sidebar Order Summary */}
        <div>
          <div className="card" style={{ padding: '1.75rem', position: 'sticky', top: '100px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
              Items in Order ({cartItems.length})
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '300px', overflowY: 'auto', marginBottom: '1.5rem', paddingRight: '0.5rem' }}>
              {cartItems.map(item => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <img src={item.product.image} alt={item.product.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                  <div style={{ flex: 1, minWidth: 0, fontSize: '0.85rem' }}>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.product.name}</div>
                    <div style={{ color: 'var(--text-muted)' }}>Qty: {item.quantity} • {item.selectedSize || 'Standard'}</div>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Shipping</span>
                <span>{cartShipping === 0 ? <strong style={{ color: 'var(--accent)' }}>FREE</strong> : `$${cartShipping.toFixed(2)}`}</span>
              </div>
              <hr style={{ borderColor: 'var(--border-color)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: 900 }}>
                <span>Total</span>
                <span style={{ color: 'var(--primary)' }}>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .checkout-layout { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
          .form-grid > * { grid-column: span 1 !important; }
        }
      `}</style>
    </div>
  );
};
