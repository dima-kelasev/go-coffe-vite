import { ENDPOINTS } from '../../const/endpoints';
import api from '..';
import type { TPaymentData } from '../types';

export const postPurchase = async (paymentData: TPaymentData) => {
  try {
    const response = await api.post(ENDPOINTS.purchase, paymentData, {});
    return response.data;
  } catch (err) {
    console.error('Ошибка при совершении платежа');
    throw err;
  }
};
