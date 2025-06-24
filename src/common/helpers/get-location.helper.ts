type Coords = { latitude: number; longitude: number };

export const getUserLocation = async (): Promise<Coords | null> => {
  // Обёртка над geolocation API
  const getCoordsFromBrowser = (): Promise<Coords> =>
    new Promise((resolve, reject) => {
      if (typeof navigator === 'undefined' || !navigator.geolocation) {
        return reject(new Error('Геолокация не поддерживается'));
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 8000,
          maximumAge: 0,
        }
      );
    });

  try {
    // Пробуем через браузер
    const browserCoords = await getCoordsFromBrowser();
    console.log('[Геолокация через браузер]', browserCoords);
    return browserCoords;
  } catch (browserError) {
    console.warn('[Не удалось через navigator.geolocation]', browserError);

    try {
      // Пробуем через IP
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();

      if (data?.latitude && data?.longitude) {
        const coords = {
          latitude: Number(data.latitude),
          longitude: Number(data.longitude),
        };
        console.log('[Геолокация через IP]', coords);
        return coords;
      } else {
        console.error('[IP API не вернул координаты]', data);
        return null;
      }
    } catch (ipError) {
      console.error('[Ошибка при получении координат через IP]', ipError);
      return null;
    }
  }
};
