import axios from "axios";
import { useQuery } from "react-query";
import { ProductsCardProps } from "../components/ProductCard";

const fetchProducts = async (): Promise<ProductsCardProps> => {
    const response = await axios.get<ProductsCardProps>("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC");
   console.log(response.data)
    return response.data;

  };

  export function useProductData(){
    const query = useQuery({
        queryFn: fetchProducts,
        queryKey: ['product-data'],
    })
    return{ ...query,
        data: query.data?.products
    }
  }