export interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  export interface ProductSearchParams {
    name?: string;
  }
  
  export interface ProductFilterParams {
    minPrice?: string;
    maxPrice?: string;
  }
  