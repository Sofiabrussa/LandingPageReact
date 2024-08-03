import React from 'react'
import { CategoriasContainer, CategoriasWrapper } from './CategoriesStyled'
import {categories} from "../../data/Categories"
import Category from './Category'

const Categories = () => {
  return (
    <CategoriasWrapper>
        <h2>Categorias</h2>
        <CategoriasContainer>
            {
                categories.map((category) => { //Por cada categoria, de vuelvo una sola 
                    return <Category
                        key={category.id}  //los maps deben contener una variable key unica
                        {...category} //Le paso como prop todo o que tiene categoria para que lo use
                    />
                })
            }
        </CategoriasContainer>
    </CategoriasWrapper>
  )
}

export default Categories