export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  
};
  
  export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
  };

  export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
  };