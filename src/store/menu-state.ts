import { atom } from 'recoil';
import type { TMenuItem } from './types';

export const menuState = atom<TMenuItem[]>({
  key: 'menuState',
  default: [],
});

export const menuLoadingState = atom({
  key: 'menuLoadingState',
  default: false,
});

export const menuErrorState = atom({
  key: 'menuErrorState',
  default: '',
});
