import { useState } from 'react';
import { createMenu } from '../api/services/create-menu';
import type { TMenuData } from '../api/types';

type TRegisterMenu = {
  menuData: TMenuData;
  onSuccess: () => void;
};

export const useCreateMenu = () => {
  const [loading, setLoading] = useState(false);

  const registerMenu = async ({ menuData, onSuccess }: TRegisterMenu) => {
    setLoading(true);
    try {
      await createMenu(menuData);
      console.log('Ура', 'Позиция добавлено в меню');

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.log('Упс', 'Не удалось добавить позицию в меню');
      return Promise.reject(error);
    } finally {
      setLoading(false);
    }
  };

  return { registerMenu, loading };
};
