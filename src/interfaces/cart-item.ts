import { ProductItem } from './index';

export interface CartItem {
  product: ProductItem;
  quantity: number;
  price: number;
}
