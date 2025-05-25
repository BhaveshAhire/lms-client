"use client";
import { toast } from 'react-hot-toast';

type ToastType = 'success' | 'error' | 'loading';

interface ToastOptions {
  duration?: number;
  position?: 'top-center' | 'top-right' | 'top-left' | 'bottom-center' | 'bottom-right' | 'bottom-left';
}

export const useCustomToast = () => {
  const showToast = (message: string, type: ToastType = 'success', options: ToastOptions = {}) => {
    const defaultOptions = {
      duration: 5000,
      style: {
        background: '#363636',
        color: '#fff',
        padding: '16px',
        borderRadius: '8px',
      },
      ...options
    };

    switch (type) {
      case 'success':
        return toast.success(message, defaultOptions);
      case 'error':
        return toast.error(message, defaultOptions);
      case 'loading':
        return toast.loading(message, defaultOptions);
      default:
        return toast(message, defaultOptions);
    }
  };

  return { showToast };
}; 