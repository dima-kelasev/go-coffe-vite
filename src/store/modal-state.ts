import { atom } from 'recoil';
import type { TMenu } from '../common/types/shop-item.type';

type TCafeInfo = {
  id: number;
  name: string;
  address: string;
  menu: TMenu[];
};

type TModalState = {
  isOpen: boolean;
  cafeInfo?: TCafeInfo;
};

const defaultModalState = {
  isOpen: false,
  cafeInfo: {
    id: 0,
    name: '',
    address: '',
    menu: [],
  },
} as TModalState;

export const modalState = atom({
  key: 'orderModalState',
  default: defaultModalState,
});
