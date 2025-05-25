"use client";
import { toast } from 'react-hot-toast';

export const useToast = () => {
  const showToast = (message: string, type: 'success' | 'error' | 'loading' = 'success') => {
    return toast[type](message, {
      style: {
        background: '#363636',
        color: '#fff',
      },
      duration: 5000,
    });
  };

  return { showToast };
}; 