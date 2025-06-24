import { ENDPOINTS } from '../../const/endpoints';
import api from '..';
import { TPaymentData } from '../types';

export const postPurchase = async (paymentData: TPaymentData) => {
  try {
    const response = await api.post(ENDPOINTS.purchase, paymentData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (err) {
    console.error('Ошибка при совершении платежа');
    throw err;
  }
};
