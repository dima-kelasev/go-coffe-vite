import { notification } from 'antd';
import { postPurchase } from '../api/services/purchase';
import type { TMenuItem } from '../store/types';
import type { TPaymentData } from '../api/types';

type UseOrderProps = {
  userId: number;
  paymentMethod?: 'cash' | 'card';
};

export const useOrder = ({ userId, paymentMethod = 'card' }: UseOrderProps) => {
  const [api, contextHolder] = notification.useNotification();

  const placeOrder = async (
    cart: TMenuItem[],
    cafeInfo: { id: string | number; name?: string }
  ): Promise<boolean> => {
    if (!cart.length) return false;

    const totalPrice = cart.reduce((sum, item) => sum + Number(item.price), 0);

    const paymentData: TPaymentData = {
      placeId: cafeInfo.id.toString(),
      description: `Заказ из кафе "${cafeInfo.name ?? ''}"`,
      paymentHash: 'fake_hash_123', // TODO: заменить на реальный
      paymentMethod,
      amount: totalPrice,
      userId,
      menuIds: cart.map((item) => item.id),
    };

    try {
      await postPurchase(paymentData);

      api.success({
        message: 'Заказ оформлен!',
        description: `Позиций: ${cart.length}, сумма: ${totalPrice}₽`,
        placement: 'bottom',
      });

      return true;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      api.error({
        message: 'Ошибка',
        description: 'Не удалось оформить заказ. Попробуйте снова.',
        placement: 'bottom',
      });

      return false;
    }
  };

  return { placeOrder, contextHolder };
};
