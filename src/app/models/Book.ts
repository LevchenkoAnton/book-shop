export interface Link {
  type: string;
  link: string;
}

export interface Book {
  name: string;
  author: string;
  description: string;
  id?: string;
  links?: Link[];
}
