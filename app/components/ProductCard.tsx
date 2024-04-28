import "../styles/products.scss";
import { UseDispatch, useDispatch } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import { CartProduct } from "../interface/Product";
import { CartProductProps } from "../interface/Product";


export default function ProductCard({ cartProducts }: CartProductProps) {

  const dispatch = useDispatch();

  return (
    <div className="grid-products">
      {cartProducts.map((product) => (
        <div key={product.id} className="product-card rounded-t-lg flex flex-col w-[218px] h-fit items-center justify-between text-black">
          <img src={product.photo}  alt={product.name} />
          <div className="flex w-full justify-between px-[10px]">
            <h1 className="text-black">{product.name}</h1>
            <p className="px-3 flex items-center h-[32px] bg-[#373737] text-white rounded-md">R${product.price}</p>
          </div>
          <p className="text-black text-sm">{product.description}</p>
          <button onClick={() => dispatch(addToCart(product))}
           className="rounded-b-lg">Comprar</button>
        </div>
      ))}
    </div>
  )
}
