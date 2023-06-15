import { Capacitys } from './capacitys';
import { Phone } from './phone';

export interface Product {
  id: string;
  category: string;
  phoneId: string;
  phone: Phone | null;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  capacity: Capacitys;
  color: string;
  year: number;
  screen: string;
  ram: string;
  image: string;
}
