import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

export const TitleStyle = styled(Title)`
  margin: 0 !important;
`;

export const ShopItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  border-radius: 5px;
  border: 1px solid #00000014;
  padding: 8px;
  -webkit-box-shadow: -1px 0px 23px -7px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: -1px 0px 23px -7px rgba(34, 60, 80, 0.2);
  box-shadow: -1px 0px 23px -7px rgba(34, 60, 80, 0.2);
  cursor: pointer;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
