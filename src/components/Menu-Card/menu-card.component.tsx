import { Typography } from 'antd';
import CoffeeIcon from '../../assets/img/coffee-icon.png';
import { ShoppingCartOutlined } from '@ant-design/icons';
import type { TMenuItem } from '../../store/types';
import { CustomBtn, MenuDescription, MenuItem } from './menu-modal.styeld';

const { Title, Text } = Typography;

type Props = {
  item: TMenuItem;
  inCart: boolean;
  onAdd: (item: TMenuItem) => void;
  onRemove: (item: TMenuItem) => void;
};

export const MenuCard = ({ item, inCart, onAdd, onRemove }: Props) => {
  return (
    <MenuItem>
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
        <CustomBtn type="primary" onClick={() => onRemove(item)}>
          <ShoppingCartOutlined />
        </CustomBtn>
      ) : (
        <CustomBtn type="primary" onClick={() => onAdd(item)}>
          {`${item.price}₽`}
        </CustomBtn>
      )}
    </MenuItem>
  );
};
