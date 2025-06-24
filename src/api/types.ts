export type TCreateCafe = {
  name: string;
  address: string;
  latitude: string | number;
  longitude: string | number;
  description: string;
};

export type TMenuData = {
  place_id: number;
  name: string;
  description: string;
  price: number;
};

export type TPaymentData = {
  placeId: string;
  description?: string;
  paymentHash: string;
  paymentMethod: 'card' | 'cash';
  amount: number;
  userId: number;
  menuIds: number[];
};
