
export interface CartProduct extends Product {
    quantity?: number;
  }
  
  export interface CartProductProps {
    cartProducts: CartProduct[];
  }
  
  export interface Product {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
  }
  
  export interface ProductsCardProps {
    products: Product[];
  }
  