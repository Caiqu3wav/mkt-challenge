'use client'
import styles from "./style.module.scss";
import { motion } from 'framer-motion';
import {menuSlide} from "../styles/anim";
import { RiCloseCircleFill } from "react-icons/ri";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState, useEffect } from "react";
import { useProductData } from "../hooks/useProductsData";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../redux/cart.slice";
import { CartProduct } from "../interface/Product";

interface Props {
    onClose: () => void;
}


export default function CartNav({ onClose }: Props) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const { data: productsData, isLoading } = useProductData();
const cartItems = useSelector((state: RootState) => state.cart)

const dispatch = useDispatch();

const incrementQuantityAction = (productId: number) => {
  dispatch(incrementQuantity(productId));
}

const decrementQuantityAction = (productId: number) => {
  dispatch(decrementQuantity(productId));
}

const removeAllAction = (productId: number) => {
  dispatch(removeFromCart(productId));
}

useEffect(() => {
  if (productsData && cartItems.length > 0) {
    const productsInCart = cartItems.map((item) => {
     const product = productsData.find((product: CartProduct) => product.id === item.id);
      return product ? { ...product, quantity: item.quantity || 0 } : null;
  }).filter(Boolean) as CartProduct[]; 

    setCartProducts(productsInCart);
  }
}, [productsData, cartItems]);

const totalPrice = cartProducts.reduce((acc, product) => {
  const quantity = product.quantity !== undefined ? product.quantity : 0;
  const productPrice = Number(product.price) * quantity;
if(quantity > 0){
  return acc + productPrice
} return acc;
}, 0)  

  return (
    <motion.div 

    variants={menuSlide} 

    initial="initial" 

    animate="enter" 

    exit="exit" 

    className={styles.menu}

    >

     <div className={styles.body}>

          <div className={styles.nav}>

                  <div className={styles.header}>
                    <p>Carrinho de Compras</p>
                      <button onClick={onClose} className="text-4xl"><RiCloseCircleFill/></button>
                  </div>

                  {productsData && cartItems.length === 0 ? (
                    <h1>Seu carrinho está vazio.</h1>
                  ) : (
                    <>
                    <div className="flex flex-col gap-4">
                      {cartProducts.map((product) => (
                        <div key={product.id} className="flex text-sm text-black w-[350px] h-[105px] px-2 bg-white items-center justify-between rounded-xl">
                            <img src={product.photo} className="w-[100px] h-[100px]" alt="" />
                        <p className="text-sm">{product.name}</p>
                        <div className="flex flex-col">
                        <p>Qnt.</p>
                        <div className="flex"><button onClick={() => decrementQuantityAction(product.id)} className="rounded-l-[20px] px-1 items-center border-solid rounded-r-lg border-2">-</button>
                        <div className="px-1 border-solid border-2">{product.quantity}</div>
                        <button onClick={() => incrementQuantityAction(product.id)} className="flex px-1 items-center border-solid rounded-r-lg border-2">+</button>
                        </div>
                        </div>
                        <div className="flex flex-col">
                        <p>R${product.quantity !== undefined ? (Number(product.price) * product.quantity).toFixed(2) : 0}</p>
                        <button onClick={() => removeAllAction(product.id)} className="py-0 px-2 bg-black text-white absolute mt-11 ">X</button>
                        </div>
                        </div>
                      ))}
                    </div>
                    </>
                  )
                  }
                  {cartItems.length > 0 && (
              <p>Total: R${totalPrice.toFixed(2)}</p>
                  )}
          </div>

          <div className={styles.footer}>
                  <button>Finalizar compra</button>
          </div>

      </div>

  </motion.div>
  )
}
