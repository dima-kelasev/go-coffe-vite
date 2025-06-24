import { Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { modalState } from '../../store/modal-state';
import { MenuItemsContainer } from './menu-modal.styeld';
import { useState } from 'react';
import { ORDER_MODAL } from '../../common/conts/modal-key.const';
import { useMenu } from '../../hooks/useMenu';
import type { TMenuItem } from '../../store/types';
import { useOrder } from '../../hooks/useOrder';
import { MenuCard } from './components/Menu-Card/menu-card.component';
import { ModalHeader } from './components/Modal-Header/modal-header.component';
import { OrderBlock } from './components/Order-Block/order-block.component';

export const MenuModal = () => {
  const [modalProps, setModalProps] = useRecoilState(modalState);
  const [cart, setCart] = useState<TMenuItem[]>([]);

  const { isOpen, cafeInfo } = modalProps;
  const placeID = cafeInfo?.id;
  const { menu } = useMenu(placeID ?? undefined);
  const { placeOrder, contextHolder } = useOrder({
    userId: 1,
  });

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

  const handlePlaceOrder = async () => {
    if (cart.length === 0) return;

    const success = await placeOrder(cart, {
      id: cafeInfo?.id ?? '',
      name: cafeInfo?.name,
    });

    if (success) {
      handleCancel();
    }
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
        <ModalHeader cafeInfo={cafeInfo} />

        <MenuItemsContainer>
          {menu.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              inCart={isInCart(item)}
              onAdd={handleAddToCart}
              onRemove={handleRemoveFromCart}
            />
          ))}
        </MenuItemsContainer>

        {cart.length > 0 && (
          <OrderBlock
            totalPrice={totalPrice}
            handlePlaceOrder={handlePlaceOrder}
          />
        )}
      </Modal>
    </>
  );
};
