import { Modal, notification, Typography, Button } from 'antd';
import { useRecoilState } from 'recoil';
import { modalState } from '../../store/modal-state';
import { ShoppingCartOutlined } from '@ant-design/icons';
import {
  CustomBtn,
  MenuDescription,
  MenuItem,
  MenuItemsContainer,
  MenuTitle,
  ModalTittle,
  OrderSummary,
} from './menu-modal.styeld';
import { useState } from 'react';
import CoffeeIcon from '../../assets/img/coffee-icon.png';
import { ORDER_MODAL } from '../../common/conts/modal-key.const';
import { useMenu } from '../../hooks/useMenu';
import type { TMenuItem } from '../../store/types';

const { Title, Text } = Typography;

export const MenuModal = () => {
  const [modalProps, setModalProps] = useRecoilState(modalState);
  const { isOpen, cafeInfo } = modalProps;
  const [api, contextHolder] = notification.useNotification();

  const placeID = cafeInfo?.id;
  const { menu } = useMenu(placeID ?? undefined);
  const [cart, setCart] = useState<TMenuItem[]>([]);

  const isInCart = (product: TMenuItem) => {
    return cart.some((item) => item.id === product.id);
  };

  const handleCancel = () => {
    setModalProps({ isOpen: false });
    setCart([]);
  };

  const handleAddToCart = (product: TMenuItem) => {
    setCart((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (product: TMenuItem) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;

    const order = cart.map(({ id, ...rest }) => ({
      ...rest,
      cafeName: cafeInfo?.name,
      cafeId: cafeInfo?.id,
      productId: id,
    }));

    console.log('multi-order', order);

    api.success({
      message: 'Заказ оформлен!',
      description: `Позиций: ${cart.length}, сумма: ${totalPrice}₽`,
      placement: 'bottom',
    });

    handleCancel();
  };

  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <>
      {contextHolder}
      <Modal
        open={isOpen}
        onCancel={handleCancel}
        footer={null}
        width={700}
        key={ORDER_MODAL}
      >
        <ModalTittle>
          <Title level={1} style={{ margin: 0 }}>
            {cafeInfo?.name}
          </Title>
          <Text type="secondary">{`Адрес: ${cafeInfo?.address}`}</Text>
        </ModalTittle>

        <MenuTitle>
          <Title level={3} style={{ margin: 0 }}>
            Меню:
          </Title>
        </MenuTitle>

        <MenuItemsContainer>
          {menu.map((item) => {
            const inCart = isInCart(item);

            return (
              <MenuItem key={item.id}>
                <img
                  src={item.imageLink ?? CoffeeIcon}
                  alt={item.description}
                  width={50}
                  height={50}
                />
                <MenuDescription>
                  <Title level={5}>{item.name}</Title>
                  <Text type="secondary">{`${250} мл`}</Text>
                </MenuDescription>

                {inCart ? (
                  <CustomBtn
                    type="primary"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    <ShoppingCartOutlined />
                  </CustomBtn>
                ) : (
                  <CustomBtn
                    type="primary"
                    onClick={() => handleAddToCart(item)}
                  >
                    {`${item.price}₽`}
                  </CustomBtn>
                )}
              </MenuItem>
            );
          })}
        </MenuItemsContainer>

        {cart.length > 0 && (
          <OrderSummary>
            <Text strong>Итого: {totalPrice}₽</Text>
            <Button type="primary" onClick={handlePlaceOrder}>
              Заказать
            </Button>
          </OrderSummary>
        )}
      </Modal>
    </>
  );
};
