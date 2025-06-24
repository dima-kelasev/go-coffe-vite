import { useRecoilState } from 'recoil';
import { fetchPlaces } from '../api/services/get-places';
import { placesState, loadingState, errorState } from '../store/places';

export const usePlaces = () => {
  const [places, setPlaces] = useRecoilState(placesState);
  const [loading, setLoading] = useRecoilState(loadingState);
  const [error, setError] = useRecoilState(errorState);

  const loadPlaces = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPlaces();
      setPlaces(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError('Не удалось загрузить кафе');
    } finally {
      setLoading(false);
    }
  };

  return { places, loading, error, loadPlaces };
};
