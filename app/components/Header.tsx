'use client'
import { useState, useEffect,  } from "react";
import { AnimatePresence } from "framer-motion";
import "../styles/header.scss";
import { FaCartShopping } from "react-icons/fa6";
import CartNav from "./CartNav";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const cart = useSelector((state: RootState) => state.cart);

  const getItemsCount = () => {
      return cart.reduce((accumulator, item) => accumulator + item.quantity, 0)
  }
 
  return (
    <header>
        <h1 className='flex items-center gap-2'>MKS <span className='font-light'>Sistemas</span></h1>
      <button onClick={() => setIsActive(!isActive)} className="rounded-full flex bg-white text-black py-2 px-2"><FaCartShopping/>
      <span className="absolute py-0 px-2 ml-[14px] mt-2 bg-red-600 rounded-full">{getItemsCount()}</span></button>
    <AnimatePresence mode="wait">
      {isActive && <CartNav onClose={() => setIsActive(!isActive)} />}
    </AnimatePresence>
    </header>
  )
}
