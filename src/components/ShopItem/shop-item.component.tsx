import { useSetRecoilState } from 'recoil';

import { modalState } from '../../store/modal-state';
import { ShopItemContainer, TitleStyle } from './shop-item.styles';
import { Typography } from 'antd';
import type { TShopItem } from '../../common/types/shop-item.type';

const { Text } = Typography;

type TShopItemProps = {
  shop: TShopItem;
};

export const ShopItem = ({ shop }: TShopItemProps) => {
  const setOpenModal = useSetRecoilState(modalState);
  const cafeInfo = {
    name: shop.name,
    address: shop.address,
    menu: shop.menu,
    id: shop.id,
  };

  const handleOpenModal = () => {
    setOpenModal({ isOpen: true, cafeInfo });
  };

  return (
    <ShopItemContainer onClick={handleOpenModal}>
      <TitleStyle level={3}>{shop.name}</TitleStyle>
      <Text type="secondary">{shop.address}</Text>
    </ShopItemContainer>
  );
};
