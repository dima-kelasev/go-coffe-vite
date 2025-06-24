import api from '..';
import { ENDPOINTS } from '../../const/endpoints';

export const fetchMenu = async (placeID: number | string) => {
  try {
    const response = await api.get(ENDPOINTS.getMenu(placeID));
    return response.data;
  } catch (error) {
    console.error('Ошибка загрузки меню:', error);
    throw error;
  }
};
