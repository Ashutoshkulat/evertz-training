import { Product } from 'src/app/models/product.model';
export interface Order {
  name: string;
  phone: number;
  data?: Product[]
}
