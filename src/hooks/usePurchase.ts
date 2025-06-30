import { useState } from 'react';
import { postPurchase } from '../api/services/purchase';
import type { TPaymentData } from '../api/types';

type TMakePurchase = {
  paymentData: TPaymentData;
  onSuccess: () => void;
};

export const usePurchase = () => {
  const [loading, setLoading] = useState(false);

  const makePurchase = async ({ paymentData, onSuccess }: TMakePurchase) => {
    setLoading(true);
    try {
      await postPurchase(paymentData);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.log('Ошибка при совершении платежа');
      return Promise.reject(error);
    } finally {
      setLoading(false);
    }
  };

  return { makePurchase, loading };
};
