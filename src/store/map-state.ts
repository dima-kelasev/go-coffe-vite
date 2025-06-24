import { atom } from 'recoil';

const defaultMapStore = { latitude: 0, longitude: 0 };

export const mapStore = atom({
  key: 'mapStore',
  default: defaultMapStore,
});
