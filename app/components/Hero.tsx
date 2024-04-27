'use client'
import "../styles/hero.scss";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useProductData } from "../hooks/useProductsData";

export default function Hero() {
  const { data, isLoading } = useProductData();


  return (
    <div className="hero">
     {!isLoading && data && (
        <ProductCard products={data} />
      )}
      {isLoading && <p>Carregando...</p>}
    </div>
  )
};