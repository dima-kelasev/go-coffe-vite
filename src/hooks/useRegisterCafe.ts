import { useState } from 'react';
import { createCafe } from '../api/services/createCafe';
import type { TCreateCafe } from '../api/types';

type TRegisterCafe = {
  cafeData: TCreateCafe;
  onSuccess?: () => void;
};

export const useRegisterCafe = () => {
  const [loading, setLoading] = useState(false);

  const registerCafe = async ({ cafeData, onSuccess }: TRegisterCafe) => {
    if (
      !cafeData.name ||
      !cafeData.address ||
      !cafeData.latitude ||
      !cafeData.longitude ||
      !cafeData.description
    ) {
      console.log('Ошибка', 'Заполните все поля');
      return;
    }

    setLoading(true);

    try {
      await createCafe(cafeData);
      console.log('Успешно', 'Кафе зарегистрировано!');

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.log('Ошибка', 'Не удалось зарегистрировать кафе');
      return Promise.reject(error);
    } finally {
      setLoading(false);
    }
  };

  return { registerCafe, loading };
};
