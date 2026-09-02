import React from 'react';
import { useStore } from '../context/StoreContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useStore();

  if (toasts.length === 0) return null;

  return (
    <div 
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        maxWidth: '380px',
        width: 'calc(100vw - 3rem)'
      }}
    >
      {toasts.map(toast => {
        let bgColor = '#0F172A';
        let borderColor = '#334155';
        let icon = <Info size={20} color="#00F0FF" />;

        if (toast.type === 'success') {
          bgColor = '#064E3B';
          borderColor = '#10B981';
          icon = <CheckCircle2 size={20} color="#34D399" />;
        } else if (toast.type === 'error') {
          bgColor = '#7F1D1D';
          borderColor = '#EF4444';
          icon = <AlertCircle size={20} color="#F87171" />;
        } else if (toast.type === 'warning') {
          bgColor = '#78350F';
          borderColor = '#F59E0B';
          icon = <AlertCircle size={20} color="#FBBF24" />;
        }

        return (
          <div
            key={toast.id}
            style={{
              backgroundColor: bgColor,
              border: `1px solid ${borderColor}`,
              color: '#F8FAFC',
              padding: '0.85rem 1.1rem',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
              animation: 'slideInUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              fontSize: '0.9rem',
              fontWeight: 500
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {icon}
              <span>{toast.text}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              aria-label="Close notification"
              style={{
                color: 'rgba(255,255,255,0.7)',
                padding: '2px',
                borderRadius: '4px',
                lineHeight: 1
              }}
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
