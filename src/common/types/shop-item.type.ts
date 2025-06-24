export type TMenu = {
  id: number;
  nameProduct: string;
  price: string;
  size: string;
  imageLink: string;
};

export type TShopItem = {
  id: number;
  name: string;
  address: string;
  logo: string;
  available: boolean;
  menu: TMenu[];
};
