import api from '..';
import { ENDPOINTS } from '../../const/endpoints';
import type { TCreateCafe } from '../types';

export const createCafe = async (cafeData: TCreateCafe) => {
  try {
    const response = await api.post(ENDPOINTS.createCafe, cafeData, {
      headers: { 'Content-Type': 'application/json' },
    });

    return response.data;
  } catch (error) {
    console.error('Ошибка регистрации кафе:', error);
    throw error;
  }
};
