import { Button, Typography } from 'antd';
import { OrderSummary } from './order-block.styeld';

type TOrderBlock = {
  totalPrice: number;
  handlePlaceOrder: () => void;
};

const { Text } = Typography;

export const OrderBlock = ({ totalPrice, handlePlaceOrder }: TOrderBlock) => {
  return (
    <OrderSummary>
      <Text strong>Итого: {totalPrice}₽</Text>
      <Button type="primary" onClick={handlePlaceOrder}>
        Заказать
      </Button>
    </OrderSummary>
  );
};
