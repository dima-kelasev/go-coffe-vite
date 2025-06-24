import api from '..';
import { ENDPOINTS } from '../../const/endpoints';
import type { TMenuData } from '../types';

export const createMenu = async (menuData: TMenuData) => {
  try {
    const response = await api.post(
      ENDPOINTS.createMenu(menuData.place_id),
      menuData,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Ошибка при создании меню:', error);
    throw error;
  }
};
