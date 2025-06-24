export const ENDPOINTS = {
  createCafe: '/api/places/',
  getPlaces: '/api/places/',
  createMenu: (placeID: number | string) => `/api/places/${placeID}/menus`,
  getMenu: (placeID: number | string) => `/api/places/${placeID}/menus`,
  purchase: '/billing/purchase',
};
