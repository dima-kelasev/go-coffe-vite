import { ENDPOINTS } from '../../const/endpoints';

export const fetchPlaces = async () => {
  try {
    const response = await fetch(ENDPOINTS.getPlaces, {});

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Ошибка при получении списка кафе:', error);
    throw error;
  }
};
