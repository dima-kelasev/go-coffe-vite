import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { Spin } from 'antd';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modalState } from '../../store/modal-state';
import { mapStore } from '../../store/map-state';
import { SpinBox } from './map.styles';
import { spinStyle } from '../../common/conts/spin-style';
import { useEffect, useState } from 'react';
import { usePlaces } from '../../hooks/usePlaces';
import { ShopSnackBar } from '../ShopSnackBar/shop-snack-bar.component';
import type { TShopItem } from '../../common/types/shop-item.type';
// import { getUserLocation } from '../../common/helpers/get-location.helper';

export const YandexMap = () => {
  const setOpenModal = useSetRecoilState(modalState);
  const location = useRecoilValue(mapStore);
  const setLocation = useSetRecoilState(mapStore);
  const { places } = usePlaces();
  const [selectedShop, setSelectedShop] = useState<TShopItem | null>(null);

  const handleShopSelect = (shop: TShopItem) => {
    setSelectedShop(shop);
  };

  useEffect(() => {
    const mockCoords = { latitude: 45.0428, longitude: 41.9734 };
    setLocation(mockCoords);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenModal = (shop: TShopItem) => {
    const cafeInfo = {
      name: shop.name,
      address: shop.address,
      menu: shop.menu,
      id: shop.id,
    };
    setOpenModal({ isOpen: true, cafeInfo });
    setSelectedShop(null);
  };

  if (!location.latitude && !location.longitude) {
    const content = <div style={spinStyle} />;
    return (
      <SpinBox>
        <Spin tip="Загрузка карты" size="large">
          {content}
        </Spin>
      </SpinBox>
    );
  }
  return (
    <YMaps>
      <Map
        defaultState={{ center: [45.0428, 41.9734], zoom: 13 }}
        width="100%"
        height="100%"
        modules={['templateLayoutFactory']}
      >
        {places.map((shop) => (
          <Placemark
            key={shop.id}
            geometry={[shop.latitude, shop.longitude]}
            modules={[]}
            onClick={() => handleShopSelect(shop)}
            options={{
              preset: 'islands#blueIcon',
            }}
          />
        ))}
      </Map>
      <ShopSnackBar
        selectedShop={selectedShop}
        handleOpenModal={handleOpenModal}
      />
    </YMaps>
  );
};
