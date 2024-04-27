'use client'
import { StyledHero } from "./style";
import ProductCard from "./ProductCard";

export default function Hero() {
  return (
    <StyledHero>
      <div className="grid-products">
        <ProductCard/>
      </div>
    </StyledHero>
  )
};