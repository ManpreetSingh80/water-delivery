import { CartItem, Address, OrderStatus, ShopItem } from './index'

export interface Order {
  id: number;
  cart: CartItem[];
  address: Address;
  orderStatus: OrderStatus;
  orderTime: number;
  deliveryTime: number;
  shop: ShopItem;
  totalPrice: number;
  totalQuantity: number;
}
