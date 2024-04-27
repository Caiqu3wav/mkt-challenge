import "../styles/products.scss";

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

export default function ProductCard({ products }: ProductsCardProps) {


  return (
    <div className="grid-products">
      {products.map((product) => (
        <div key={product.id} className="product-card rounded-t-lg flex flex-col w-[218px] h-fit items-center justify-between text-black">
          <img src={product.photo}  alt={product.name} />
          <div className="flex w-full justify-between px-[10px]">
            <h1 className="text-black">{product.name}</h1>
            <p className="px-3 flex items-center h-[32px] bg-[#373737] text-white rounded-md">{product.price}</p>
          </div>
          <p className="text-black text-sm">{product.description}</p>
          <button className="rounded-b-lg">Comprar</button>
        </div>
      ))}
    </div>
  )
}
