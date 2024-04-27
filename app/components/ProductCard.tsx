'use client'
import Image from "next/image"
import { ProductCardStyled } from "./style"

export default function ProductCard() {
  return (
    <ProductCardStyled>
        <div className="name-price">
            <h1>Apple sla dkkekeke</h1>
            <p>R$329,99</p>
        </div>
        <p>Descrição</p>
    </ProductCardStyled>
  )
}
