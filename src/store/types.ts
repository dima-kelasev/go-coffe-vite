export type TPlaces = {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  name: string;
  description: string;
  address: string;
  available: boolean;
  logo: string;
  latitude: number;
  longitude: number;
};

export type TMenuItem = {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  place_id: number;
  price: number;
  name: string;
  description: string;
  logo: string;
  imageLink?: string;
};
