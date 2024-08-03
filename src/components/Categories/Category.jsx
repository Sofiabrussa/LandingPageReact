import React from 'react'
import { BorderDecoration, CardCategoria } from './CategoriesStyled'

const Category = ({img, title, category}) => { //LLega esta info porque asi se definió en el array de categorias
  return (
    <CardCategoria
      whileTap={{scale:0.95}} //animacion por motion
    >
      <img src={img} alt={category} />
      <h2>{title}</h2>
      <BorderDecoration />
    </CardCategoria>
  )
}

export default Category