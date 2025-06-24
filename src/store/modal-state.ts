import { atom } from 'recoil';

type TCafeInfo = {
  id: number;
  name: string;
  address: string;
};

type TModalState = {
  isOpen: boolean;
  cafeInfo?: TCafeInfo;
};

const defaultModalState = {
  isOpen: false,
} as TModalState;

export const modalState = atom({
  key: 'orderModalState',
  default: defaultModalState,
});
