export const ENDPOINTS = {
  createCafe: '/places/',
  getPlaces: '/api/places/',
  createMenu: (placeID: number | string) => `/places/${placeID}/menus`,
  getMenu: (placeID: number | string) => `/places/${placeID}/menus`,
  purchase: '/billing/purchase',
};
