import Typography from 'antd/es/typography';
import { MenuTitle, ModalTittle } from './modal-header.styled';
import type { TCafeInfo } from '../../../../store/modal-state';

type TModalHeader = {
  cafeInfo: TCafeInfo | undefined;
};

const { Title, Text } = Typography;

export const ModalHeader = ({ cafeInfo }: TModalHeader) => {
  return (
    <>
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
    </>
  );
};
