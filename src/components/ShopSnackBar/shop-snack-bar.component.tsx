import type { TPlaces } from '../../store/types';
import { ShopSnackBarContainer } from './shop-snack-bar.component.styles';
import { Button, Typography } from 'antd';

const { Title, Text } = Typography;

type TShopSnackBar = {
  selectedShop: TPlaces | null;
  handleOpenModal: (shop: TPlaces) => void;
};

export const ShopSnackBar = ({
  selectedShop,
  handleOpenModal,
}: TShopSnackBar) => {
  if (!selectedShop) {
    return null;
  }
  return (
    <ShopSnackBarContainer>
      <Title level={4} style={{ margin: 0 }}>
        {selectedShop.name}
      </Title>
      <Text type="secondary">{selectedShop.address}</Text>
      <Button type="primary" onClick={() => handleOpenModal(selectedShop)}>
        Открыть меню
      </Button>
    </ShopSnackBarContainer>
  );
};
