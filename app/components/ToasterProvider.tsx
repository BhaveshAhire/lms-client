"use client";
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

export default function ToasterProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 5000,
        style: {
          background: '#363636',
          color: '#fff',
        },
      }}
    />
  );
} 