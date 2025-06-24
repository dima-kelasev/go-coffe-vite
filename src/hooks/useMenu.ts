import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { fetchMenu } from '../api/services/get-menus';
import {
  menuState,
  menuLoadingState,
  menuErrorState,
} from '../store/menu-state';

export const useMenu = (placeID?: number | string) => {
  const [menu, setMenu] = useRecoilState(menuState);
  const [loading, setLoading] = useRecoilState(menuLoadingState);
  const [error, setError] = useRecoilState(menuErrorState);

  useEffect(() => {
    if (!placeID || placeID === 'undefined') return;

    const loadMenu = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchMenu(placeID);
        setMenu(data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Ошибка при загрузке меню');
      } finally {
        setLoading(false);
      }
    };

    loadMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeID]);

  return { menu, loading, error };
};
