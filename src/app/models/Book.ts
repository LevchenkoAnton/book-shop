export interface Link {
  type: string;
  link: string;
}

export interface Book {
  name: string;
  author: string;
  description: string;
  date?: string;
  price: number;
  id?: string;
  links?: Link[];
  isAddBasket?: boolean;
}
