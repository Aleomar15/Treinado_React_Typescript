import React from 'react'

type Props = {
    title: string
    content: string
    commentsQty: number
    tags: string[]
    // 8 - enum
    category: Category
}
export enum Category{
    JS = "Javascript",
    TS = "TypeScript",
    P = "Python"
}
const Destructuring = ({title, content, commentsQty, tags, category}: Props) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de Comentarios: {commentsQty}</p>
        <div>
            {tags.map(tag => (
                <span>a {tag}</span>
            ))}
        </div>
        <h4>Categoria: {category}</h4>
    </div>
  )
}

export default Destructuring