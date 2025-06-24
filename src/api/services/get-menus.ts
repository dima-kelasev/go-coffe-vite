import { ENDPOINTS } from '../../const/endpoints';

export const fetchMenu = async (placeID: number | string) => {
  try {
    const response = await fetch(ENDPOINTS.getMenu(placeID), {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Ошибка загрузки меню:', error);
    throw error;
  }
};
