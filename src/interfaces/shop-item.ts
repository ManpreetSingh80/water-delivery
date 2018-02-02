export interface ShopItem {
  id: number;
  name: string;
  address: string;
  zipCode: string;
  city: string;
  state: string;
  contact: string;
  timings: { opening: string, closing: string };
  location: { lat: number, lng: number };
  keywords: string[];
  image: string;
}
