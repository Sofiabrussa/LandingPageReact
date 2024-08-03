import React from 'react'
import { ButtonContainerStyled, ProductsContainer, ProductsWrapper } from './ProductsStyled'
import {products} from "../../data/Products" //Importamos arreglo de data
import ProductCard from './ProductCard.jsx'
import Button from '../UI/Button/Button'

const Products = () => {
  return (
    <ProductsWrapper>
        <h2>Nuestros Productos</h2>
        <ProductsContainer> 
            {
                products.map((product) => { //Recorro mis productos y renderizo de a uno
                    return <ProductCard
                        {...product} //Le paso toda la info de cada producto
                        key={product.id}
                    />
                })
            }
        </ProductsContainer>
        <ButtonContainerStyled>
            <Button>
                Ver menos
            </Button>
            <Button
                disabled
            >
                Ver mas
            </Button>
        </ButtonContainerStyled>
    </ProductsWrapper>
  )
}

export default Products