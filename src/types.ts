export interface Product {
  name: string;
  listPrice: number;
  withDeal: number;
  url: string;
  image: string;
  link: string;
}

export type ProductProps = keyof Product;
