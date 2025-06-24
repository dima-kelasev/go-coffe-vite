import { Button } from 'antd';
import styled from 'styled-components';

export const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const MenuItem = styled.div`
  display: flex;
  border: 1px solid #00000024;
  padding: 20px 10px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 13px -5px rgba(34, 60, 80, 0.41);
  -moz-box-shadow: 0px 0px 13px -5px rgba(34, 60, 80, 0.41);
  box-shadow: 0px 0px 13px -5px rgba(34, 60, 80, 0.41);
  cursor: pointer;
  gap: 15px;
  width: 96%;
  align-items: center;
`;

export const MenuDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const CustomBtn = styled(Button)`
  min-width: 67px;
  height: 50px;
  &:focus,
  &:active {
    box-shadow: none !important;
    outline: none !important;
  }
`;

export const ModalTittle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const OrderSummary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  padding: 16px;
  background: #fafafa;
  border-top: 1px solid #e8e8e8;
  border-radius: 8px;
`;
